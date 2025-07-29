import { RxCross2 } from "react-icons/rx";
import { useLoaderData } from "react-router-dom";
import ShowData from "./ShowData/ShowData";
import Footer from "../../Home/Footer/Footer";

const Takecourse = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      {/* Wrapper grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1 border-2 pl-4 sm:pl-6 lg:pl-10 py-4">
          <p className="text-gray-600">Search here</p>

          {/* Subject section */}
          <div className="mt-8">
            <p className="text-xl font-semibold">Subject</p>
            {[
              "Architecture",
              "Art & Culture",
              "Biology & Life Sciences",
              "Business & Management",
              "Chemistry",
            ].map((subject, index) => (
              <div key={index} className="gap-2 flex mt-4">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
                />
                <p className="text-lg">{subject}</p>
              </div>
            ))}
            <p className="underline mt-4 ml-2 text-lg">Show more</p>
          </div>

          {/* Skill section */}
          <div className="mt-10">
            <p className="text-xl font-semibold">Skill</p>
            {[
              "Accounting",
              "Agile Methodology",
              "Agriculture",
              "Algorithms",
              "Amazon Web Services",
            ].map((skill, index) => (
              <div key={index} className="gap-2 flex mt-4">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
                />
                <p className="text-lg">{skill}</p>
              </div>
            ))}
            <p className="underline mt-4 ml-2 text-lg">Show more</p>
          </div>
        </div>

        {/* Course Content */}
        <div className="col-span-3 border-2 pt-4 px-4">
          <p className="text-2xl font-bold">0 results</p>

          {/* Filter Tags & Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4 mt-4">
              <div className="flex gap-2 items-center bg-gray-100 px-2 py-1 rounded">
                <button className="text-sm">Courses</button>
                <RxCross2 className="text-sm text-black font-bold" />
              </div>
              <p className="underline text-sm mt-1 cursor-pointer">Clear all</p>
            </div>

            <div className="join">
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" defaultChecked />
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
              <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {data.map((item) => (
              <ShowData key={item.id} data={item}></ShowData>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2">
        <Footer className="mt-4" />
      </div>
    </div>
  );
};

export default Takecourse;
