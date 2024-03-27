import Link from "next/link"

const NotFound = async () => {

  return (
    <div className="max-w-6xl h-[80vh] mx-auto px-4 mt-3">
      <div className=" w-full h-full md:w-2/4 mx-auto text-center items-center mb-6 pt-20 md:pt-40 lg:pt-52 ">
                
                <p className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-3">Could not find requested resource</p>
                <Link href="/"><button className="text-base md:text-xl border px-4 hover:px-5 md:px-8  md:hover:px-9 py-3 md:py-4 rounded-full shadow-red-400 shadow-lg hover:shadow-sub_color hover:shadow-xl bg-sub_color text-red-500 hover:bg-red-600 hover:text-rose-950  font-semibold ">Return Home</button></Link>
            </div>
    </div >
  )
}

export default NotFound