import { useEffect, useState } from "react";
import { getShots, getUser } from "../../../lib/fetchApi";
import Button from "../../component/button";
import { ArrowLeft, ArrowRightCircleIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpRight, ArrowUpRightFromCircle, MoveUpRight } from "lucide-react";
import Magnet from "../../component/animate/magnetic";

const CACHE_KEY = "dribbbleShots";
const CACHE_TIME_KEY = "dribbleTimeCount";
const timeRefresh = 60 * 60 * 1000;

export default function index() {
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheData = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
    const dateNow = Date.now();

    if (cacheData && cacheTime && dateNow - cacheTime < timeRefresh) {
      console.log("Menggunakan data dari localStorage");
      setData(JSON.parse(cacheData));
      setLoading(false);
    } else {
      console.log("Fetching data dari API...");
      setLoading(true);
      getShots()
        .then((results) => {
          console.log(results);
          setData(results);
          localStorage.setItem(CACHE_KEY, JSON.stringify(results));
          localStorage.setItem(CACHE_TIME_KEY, Date.now());
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    getUser()
      .then((results) => {
        console.log(results);
        setUserData(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="grid content-center min-h-screen py-24 px-2 md:p-8 lg:p-16 xl:p-0">
        <div className="px-1 xl:m-40 xl:py-2 ">
          <h1 data-scroll data-scroll-speed="0.1" className="text-sm text-textPrimary/50 mb-1 xl:text-xl">
            {`{ Design exploration }`}
          </h1>
          <div className="flex gap-x-6 w-full flex-wrap md:flex-nowrap ">
            <p data-scroll data-scroll-speed="0.1" className="text-xl font-medium text-textPrimary lg:text-4xl xl:text-5xl lg:leading-[45px] xl:leading-[55px]">
              Just me playing around with shapes, layouts, and ideas. Some turn into real projects, some stay as experiments—and that’s the fun part.
            </p>
            <div className="w-1/2 flex justify-start items-center">
              <Magnet>
                <Button
                  data-scroll
                  data-scroll-speed="0.2"
                  onClick={() => window.open("https://dribbble.com/Nyutakun", "_blank")}
                  className="bg-[#222831] px-10 py-10 text-sm xl:px-12 xl:py-12 xl:text-2xl aspect-square"
                >
                  <div className="flex flex-col justify-start">
                    {/* <span className="text-xs font-thin text-start">let's check</span> */}
                    Dribbble
                  </div>
                  <ArrowUpRight />
                </Button>
              </Magnet>
            </div>
          </div>
          <div data-scroll data-scroll-speed="0.2" className="border-b w-full bg-gray-100 my-2 xl:my-6" />
          <div data-scroll data-scroll-speed="0.2" className=" grid grid-cols-1 gap-y-10 md:gap-6 md:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center">
            {loading ? (
              <p className="text-green-700 text-center">Loading...</p>
            ) : (
              <>
                {data?.slice(0, 8).map((item, index) => (
                  <div key={index}>
                    <div key={item.id} onClick={() => handleRedirect(item.html_url)} className="relative ">
                      <img
                        // bg-slate-100 border-8 border-solid border-white
                        className="smooth-corners-lg"
                        src={item?.images?.normal}
                        alt={item.title}
                        height={0}
                        width={800}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                      <div className="absolute inset-0 bg-PrimaryBlack/30 transition-all duration-500 ease-in-out group hover:bg-transparent smooth-corners-lg">
                        <div className="absolute inset-0 flex items-center justify-center mx-9 transition-all duration-400 ease-in-out mix-blend-overlay ">
                          <h1 className="text-textPrimary text-4xl md:text-xl lg:text-4xl  font-bold cursor-pointer">{item.title}</h1>
                        </div>
                        <div className="absolute w-full inset-0 flex justify-center items-center ">
                          <div className="w-12 h-12 cursor-pointer shadow-md flex justify-center items-center rounded-full duration-500 ease-in-out group-hover:bg-white group-hover:mix-blend-normal ">
                            <p className="text-transparent text-sm group-hover:text-textPrimary">View</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* name + avatar */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-x-2 items-center">
                        <img src={userData.avatar_url} alt="img" className="w-5 h-5 rounded-full" />
                        <div className="text-textPrimary font-medium antialiased">{userData.name}</div>
                      </div>
                      <div className="text-textPrimary/50">#{item.tags[0]}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
