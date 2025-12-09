import Image from "next/image"

const CardList = () => {
  return (
    <section className="relative  h-[400px] md:h-[600px] bg-white">
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 p-4 mx-auto text-black ">
      <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/dolphin.jpg"
            alt="card1" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Lumba-lumba</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/turtle.jpg"
            alt="card2" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
       <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Kura-kura</h3>
            </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/jellyfish.jpg"
            alt="card3" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Ubur-ubur</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/seahorse.jpg"
            alt="card4" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Kuda Laut</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/starfish.jpg"
            alt="card5" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Bintang Laut</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/sealion.jpg"
            alt="card6" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Singa Laut</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/clownfish.jpg"
            alt="card7" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Ikan Badut</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/orcas.jpg"
            alt="card8" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
       <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Orba</h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/shark.jpg"
            alt="card9" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold"> Hiu </h3>
              </div>
        </div>
        <div className=" bg-amber-50 rounded mx-auto">
        <Image 
            src="/whale.jpg"
            alt="card10" 
            width={350} 
            height={350}
            className="w-full max-h-64 object-cover mx-auto"/>
        <div className=" md:text-xl text-md p-4">
            <p className="md:text-md text-sm">3 September 2025</p>
            <h2 className="font-bold">Kenali Hewan Laut :</h2>
            <h3 className="font-bold">Paus</h3>
              </div>
        </div>

    </div>
    </section>
    
  )
}

export default CardList
