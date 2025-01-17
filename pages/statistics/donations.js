import Content from '../../src/components/content';
import PieChart from '../../src/components/pieChart';
import portfolio from '../../utils/portfolio';
import schc from '../../utils/SCHC';
import vcit from '../../utils/VCIT.json';

export default function DonationsPage() {
  const portfolioData = {
    name: 'Portfolio',
    color: '#ffffff',
    items: portfolio.map((d) => ({ ...d, date: new Date(d.date) })),
  };
  const schcData = {
    name: 'SCHC',
    color: '#d53e4f',
    items: schc.map((d) => ({ ...d, date: new Date(d.date) })),
  };
  const vcitData = {
    name: 'VCIT',
    color: '#5e4fa2',
    items: vcit.map((d) => ({ ...d, date: new Date(d.date) })),
  };

  const dimensions = {
    width: 1900,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      bottom: 30,
      left: 60,
    },
  };

  return (
    <>
      {/* <Content title="Donation statistics" /> */}
      <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="w-full md:w-6/12">
            <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
              <a href="#" className="w-full h-full block">
                <div className="flex items-center justify-between px-4 py-6 space-x-4">
                  <div className="flex items-center">
                    <span className="rounded-full relative p-5 bg-yellow-100">
                      <svg
                        width="40"
                        fill="currentColor"
                        height="40"
                        className="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                      </svg>
                    </span>
                    <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                      Donation Statistics
                    </p>
                  </div>
                  <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                    $44,453.39
                    <span className="text-xs text-gray-400">/$100K</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-100">
                  <div className="w-2/5 h-full text-center text-xs text-white bg-green-400"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center w-full md:w-1/2 space-x-4">
            <div className="w-1/2">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  12
                </p>
                <p className="text-gray-400 text-sm">Active projects</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  $93.76
                </p>
                <p className="text-gray-400 text-sm">Commission in approval</p>
                <span className="rounded-full absolute p-4 bg-purple-500 top-2 right-4">
                  <svg
                    width="40"
                    fill="currentColor"
                    height="40"
                    className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="w-full">
            <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
              <a href="#" className="w-full h-full block">
                <div className="flex items-center justify-between px-4 py-6 space-x-4">
                  <div className="flex items-center">
                    <span className="rounded-full relative p-5 bg-yellow-100">
                      <svg
                        width="40"
                        fill="currentColor"
                        height="40"
                        className="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                      </svg>
                    </span>
                    <p className="text-sm text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                      Donations
                    </p>
                  </div>
                  <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                    {/* $44,453
                    <span className="text-xs text-gray-400">/$100K</span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                      <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-100">
                  <div className="w-2/5 h-full text-center text-xs text-white bg-green-400"></div>
                </div>
              </a>
            </div>
            <div className="w-full bg-gray-800">
              <PieChart
                data={[portfolioData, schcData, vcitData]}
                dimensions={dimensions}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
