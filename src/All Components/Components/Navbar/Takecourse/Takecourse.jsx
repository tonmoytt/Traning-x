import { RxCross2 } from "react-icons/rx";
import { useLoaderData } from "react-router-dom";
import ShowData from "./ShowData/ShowData";



const Takecourse = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1 border-2 pl-10'>
                <p className="text-gray-600">Search here</p>
                {/* first section */}
                <div className="mt-8">
                    <p className="text-xl font-semibold">Subject</p>
                    {/* semi subjects .1 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Architecture</p>
                    </div>
                    {/* semi subjects .2 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Art & Culture</p>
                    </div>
                    {/* semi subjects .3 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Biology & Life Sciences</p>
                    </div>
                    {/* semi subjects .4 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Business & Management</p>
                    </div>
                    {/* semi subjects .5 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Chemistry</p>
                    </div>

                    {/* showmore  */}
                    <p className="underline mt-4 ml-2 text-lg">Show more</p>
                </div>
                {/* second section */}
                <div className="mt-10">
                    <p className="text-xl font-semibold">Skill</p>
                    {/* semi subjects .1 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Accounting</p>
                    </div>
                    {/* semi subjects .2 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Agile Methodology</p>
                    </div>
                    {/* semi subjects .3 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Agriculture</p>
                    </div>
                    {/* semi subjects .4 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Algorithms</p>
                    </div>
                    {/* semi subjects .5 */}
                    <div className="gap-2 flex mt-4">
                        <input type="checkbox" defaultChecked className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                        <p className="text-lg">Amazon Web Services</p>
                    </div>

                    {/* showmore  */}
                    <p className="underline mt-4 ml-2 text-lg">Show more</p>
                </div>
            </div>
            {/* post section */}
            <div className='col-span-3 border-2 pt-4 pl-4'>
                <p className="text-2xl font-bold">0 results</p>
                {/* course */}
                <div>


                    <div className="flex justify-between">

                        <div className="flex items-center gap-6 mt-8">
                            <div className="mt-2  flex gap-2 items-center ">
                                <p className="bg-gray-100 flex gap-2 px-2 py-1">
                                    <button className="text-sm">Courses</button>
                                    <RxCross2 className="mt-1 bg-gray-100 text-sm text-black font-bold" />
                                </p>
                            </div>

                            <p className="underline text-sm mt-1">Clear all</p>
                        </div>

                        {/* pagenation */}
                        <div className="join">
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </div>
                    {/* json */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        {
                            data.map(data => <ShowData key={data.id} data={data}></ShowData>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Takecourse;