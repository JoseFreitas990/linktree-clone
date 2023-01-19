import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import data from '../../data.json';
const inter = Inter({ subsets: ['latin'] });

const LinkCard = (props: any) => {
  const { item } = props;
  return (
    <a
      href={item.url}
      target="_blank"
      className="flex flex-row justify-between items-center lg:w-1/3 max-w-lg w-full border 
    border-gray-200 mb-2 bg shadow-md  py-0.5 rounded-md cursor-pointer 
    hover:scale-110 hover:shadow-xl transition-all bg-opacity-980 bg-white"
      rel="noreferrer"
    >
      <div className="w-10 h-10 ml-1 my-0.5 ">
        <Image
          src={item.image}
          className="rounded"
          alt="avatar"
          width={40}
          height={40}
        />
      </div>
      <h2 className="w-full flex justify-center items-center -ml-11">
        {item.title}
      </h2>
    </a>
  );
};

const Home = () => {
  return (
    <main className="flex flex-col items-center  h-[100vh] w-full pt-16 p-4">
      <Image
        src={data.avatar}
        className="rounded-full mx-auto m-2"
        alt="avatar"
        width={80}
        height={80}
      />
      <div className="mt-2 mb-4 text-center">
        <h1 className="font-semibold text-lg text-white">José Freitas</h1>
        <h3 className="font-thin text-md text-white">Frontend Developer </h3>
      </div>
      {data.links.map((item) => (
        <LinkCard key={item.title} item={item} />
      ))}
    </main>
  );
};

export default Home;
