const Modes = () => {
    return (
        <div className='min-h-screen'>
            <div className='relative '>
                <img src={'https://cdn.shopify.com/s/files/1/0695/8832/0569/files/bg-store_813f2a9f-eb03-47f6-b78a-0fc47de0efce.jpg?v=1740589158'} alt="Banner" className='w-full h-[400px] md:h-[600px]' />
                <div className='z-20 flex flex-col items-start absolute inset-0 space-y-3 justify-center px-4 md:mx-20'>
                    <h1 className='text-3xl md:text-6xl font-bold uppercase text-white'>Modes Of <br /> Payments</h1>
                    <hr className='h-px  bg-white w-full md:w-1/2' />
                    <p className='md:w-1/2 text-white font-normal md:text-xl tracking-wide'>At RONiN, we aim to make your shopping experience as seamless and convenient as possible. With a variety of secure payment options and free delivery across Pakistan, you can shop with confidence and ease.</p>

                </div>
                <div className='bg-black/50 absolute inset-0' />
            </div>
     
                <ul className='flex flex-wrap gap-10 backdrop-blur-2xl bg-black/20 rounded mx-auto container md:mt-20 h-60 items-center justify-center max-w-3xl'>
                    <li><img src="https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Visa_Logo.png?v=1740582890" alt="" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Master_card.png?v=1740582890" alt="" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/0695/8832/0569/files/Union_Pay.png?v=1740582890" alt="" /></li>
                    <li><img src="https://cdn.shopify.com/s/files/1/0695/8832/0569/files/payfast.png?v=1740588064" alt="" /></li>
                </ul>
           
        </div>
    )
}

export default Modes