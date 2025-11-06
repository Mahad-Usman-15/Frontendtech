type Props={
    head1:string,
    head2:string
}
const Head=({head1,head2}:Props)=>{
return(
       <div className="p-4 flex mt-20 items-center justify-between">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase tracking-wide text-black font-extrabold text-start">
         { head1 }<label className="text-blue-600">{head2}</label>
        </h1>
        <button className="hover-underline-animation text-black font-bold text-2xl">View All</button>
      </div>
)
}

export default Head


