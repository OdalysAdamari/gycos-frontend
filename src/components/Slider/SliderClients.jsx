
export const SliderClients = () => {
  
    const clients = [
        {
            id: 1,
            img: "http://localhost:1337/uploads/teksid_1_01d774224a.png"
        },
        {
            id: 2,
            img: "http://localhost:1337/uploads/psw_98db542cb1.png"
        },
        {
            id: 3,
            img: "http://localhost:1337/uploads/cat_9a6b3b33d3.png"
        },
        {
            id: 4,
            img: "http://localhost:1337/uploads/reis_5fca84f051.png"
        },
        {
            id: 5,
            img:"http://localhost:1337/uploads/denso_57bfc748fb.png"
        }        
    ]

    

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex h-[50%] items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
              {clients.map(client => (
                <li key={client.id}>
                  <img src={client.img} className="p-4" />
                </li>
              ))}
            </ul>
            <ul className="flex h-[50%] items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
              {clients.map(client => (
                <li key={client.id}>
                  <img src={client.img} className="p-4" />
                </li>
              ))}
            </ul>
          </div>
  )
}

