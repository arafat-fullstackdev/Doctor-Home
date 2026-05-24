import services from '../../images/facilities.webp';
const Emergency = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center
     w-fullmax-w-5xl mx-auto  md:p-12  shadow-sm border border-blue-100">
      
      <div className="flex flex-1 justify-start  gap-2">
       <div className='flex flex-col mx-3'>
               <h2 className="font-bold text-black">Compassionate Care, Advanced Medicine</h2>

        <p className='text-gray-300 text-lg py-2'>For over two decades, we've been dedicated to providing exceptional healthcare that combines cutting-edge medical technology with the personal touch our patients deserve.</p>
        <p className='text-gray-400 text-xl py-2'>Our multidisciplinary team of specialists works collaboratively to ensure every patient receives comprehensive care tailored to their unique needs. From preventive services to complex procedures, we maintain the highest standards of medical excellence while fostering an environment of trust and healing.</p>
       </div>
      </div>

      <div className="img flex-1 flex justify-center md:justify-end">
       <img src={services}
        alt="facilities"
        className='w-full rounded-md shadow-md'
        />
      </div>
      </div>

  )
}

export default Emergency;