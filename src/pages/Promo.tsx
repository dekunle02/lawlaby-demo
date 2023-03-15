import { useSearchParams } from "react-router-dom";

function Promo() {
  const [params, setParams] = useSearchParams();
  const score = params.get("score");

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold text-teal-800 m-2">Lawlaby</h1>
      <h1 className="text-2xl text-center mt-10">You scored {score}</h1>
      <p className="text-center my-4">
        Please take a minute to answer these questions so we can improve your
        experience 🙂
      </p>
      <a
        href="https://www.google.com"
        className="mx-auto px-4 py-2 rounded-2xl border-black bg-orange-500"
      >
        Click Here
      </a>
    </div>
  );
}

export default Promo;
