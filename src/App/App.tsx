import { useEffect, useState } from 'react';

interface Item {
  data: string;
  file: string;
}

export function App() {
  const [data, setData] = useState<Item[] | null>(null);
  const handleFetchData = async () => {
    try {
      const res = await fetch(
        'https://siriusfuture-sirius-lead-captcha-acc9.twc1.net/captcha-checks/get?token=e7c34833-eb90-4522-8044-b8ccaf62aadb',
      );

      const arr = await res.json();

      setData(arr);
    } catch (e) {
      alert('error');
    }
  };

  return (
    <div className={'bg-white min-h-screen mx-auto p-4'}>
      <div>
        <button onClick={handleFetchData} className="p-4 bg-gray-400 text-white">
          Запросить данные (нажать для обновления данных)
        </button>
      </div>
      <ul className="mt-10 flex flex-col gap-4">
        {data?.map((el) => (
          <li key={el.data} className="border-b border-gray-300 flex ">
            <div className={'pr-10'}>{el.data}</div>
            <a href={el.file} target={'_blank'} rel="noreferrer" className="text-blue-500 flex">
              скачать файл
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
