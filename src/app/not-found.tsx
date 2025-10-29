export default function NotFound() {
  return (
    <div className='flex flex-col m-20'>
        <h1 className=' text-9xl mask-l-from-neutral-300'> 404 mas Bro | Not Found </h1>
        <button className='text-7xl'> Clik di sini Untuk kembali <a href="https://www.w3schools.com">Visit W3Schools</></button>
        <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Default</button>
        {/* <button type="button" class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Disabled button</button> */}
        <button type='button' className="flex-6 cursor-not-allowed"> Disable Tombol</button>
    </div>

  )
}
