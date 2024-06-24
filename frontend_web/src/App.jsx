import {Link } from 'react-router-dom';

function Navbar (){
    return (
        <div className="bg-white">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start px-16 py-16 mx-auto w-full text-xl font-medium text-black whitespace-nowrap bg-sky-50 max-md:px-5 max-md:mt-10">
                <div className="mt-5 ml-3.5 text-4xl font-extrabold text-center max-md:ml-2.5">
                  SIMADA
                </div>
                <div className="flex gap-5 mt-20 font-bold max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eee92bf370a96d9ae7d00c3a8a2c0b0ffa361d41f32ddfcbcf62925593b943e4?apiKey=83457204a8d34837908eeb95256dc155&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <a href="/">Dashboard</a>
                </div>
                <div className="flex gap-5 mt-14 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ef83671446a0009dc60b5b54f4ac1cc25052c810752af19377b0179526624e?apiKey=83457204a8d34837908eeb95256dc155&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <a href="flex-auto my-auto">Konfirmasi</a>
                </div>
                <div className="flex gap-5 mt-14 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/99129fc7e49ac15bdd31c0356a577b3535bff362f03186376b14704d041c598c?apiKey=83457204a8d34837908eeb95256dc155&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <a href="flex-auto">Keuangan</a>
                </div>
                <div className="flex gap-5 mt-[558px] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b5aea2cb655e5e4d9d0a787d0c6eb69b72d584e4c5e94d9eafa538a9fc3a892?apiKey=83457204a8d34837908eeb95256dc155&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <a href="flex-auto">Pengaturan</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex-auto text-5xl font-bold text-black max-md:text-4xl">
                    Dashboard
                  </div>
                  <div className="flex gap-5 justify-between mt-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bea73feb1773a0a7adafbf1555150fe93786f1cfa69d138087ad61458af9e1f7?apiKey=83457204a8d34837908eeb95256dc155&"
                      className="shrink-0 w-12 aspect-square"
                    />
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ba90803d163261a7dcf8e7c9a2b75c4b73b417c7c236f9f34eb1742d89ee137?apiKey=83457204a8d34837908eeb95256dc155&"
                      className="shrink-0 w-12 aspect-square"
                    />
                  </div>
                </div>
                <div className="self-start mt-16 text-3xl font-bold text-black max-md:mt-10">
                  Approval
                </div>
                <div className="flex flex-col px-14 pt-10 pb-20 mt-8 bg-sky-50 rounded-3xl max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 w-full max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex-auto my-auto text-xl font-bold text-black max-md:max-w-full">
                      HR Menambahkan Kontrak Kerja Karyawan dengan nama Dzikri
                      Fakhry
                    </div>
                    <div className="flex gap-3">
                      <button className="flex flex-col justify-center items-start px-8 py-1 bg-emerald-400 rounded-md max-md:px-5">
                      <div className="flex-auto my-auto text-xl font-bold text-black max-md:max-w-full">
                                          Approve
                                        </div>
                      </button>
                      <button className="flex flex-col justify-center items-start px-8 py-1 bg-red-400 rounded-md max-md:px-5">
                      <div className="flex-auto my-auto text-xl font-bold text-black max-md:max-w-full">
                                          Reject
                                        </div>
                      </button>
                    </div>

                  </div>
                  <div className="mt-1.5 text-base font-bold text-indigo-400 max-md:max-w-full">
                    <Link to="/view-detail" className="underline">View Detail</Link>
                  </div>
                  <div className="shrink-0 mt-4 mb-96 h-px bg-indigo-400 border border-indigo-400 border-solid max-md:mb-10 max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Navbar;