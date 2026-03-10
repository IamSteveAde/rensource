export type Project = {
  title: string
  description: string
  location: string
  capacity: string
  category: string
  image: string
  slug: string
}

export const projects: Project[] = [
{
title:"717kWp Solar PV Installation at Valentine Chickens",
location:"Kwara, Nigeria",
capacity:"717kWp",
category:"Agriculture",
image:"/images/hero/val.jpg",
slug:"valentine-chickens-717kwp",
description:"Learn how Valentine Chickens increased its energy efficiency and reduced carbon emissions."
},

{
title:"5MWp Solar PV Installation at Baze University",
location:"Abuja, Nigeria",
capacity:"5MWp",
category:"Education",
image:"/images/hero/baze.jpg",
slug:"baze-university-5mwp",
description:"Learn how Baze University reduced its energy cost and provided stable power for efficient learning."
},

{
title:"40kWp Solar PV Installation at Rubis Energie",
location:"Nairobi, Kenya",
capacity:"40kWp",
category:"Commercial",
image:"/images/hero/rubis.jpg",
slug:"rubis-energie-40kwp",
description:"Learn how a filling station in Kenya reduced its energy cost and carbon footprint."
},

{
title:"120kWp Solar PV Installation at Valentine Chicken",
location:"Kwara State, Nigeria",
capacity:"120kWp",
category:"Agriculture",
image:"/images/hero/mo.png",
slug:"valentine-chicken-120kwp",
description:"Learn how a major poultry producer increased power reliability and reduced diesel costs."
},

{
title:"700kWp Solar PV Plant at Premium Poultry Farms",
location:"Kuje, Abuja",
capacity:"700kWp",
category:"Agriculture",
image:"/images/hero/kuje.png",
slug:"premium-poultry-700kwp",
description:"Learn how Premium Poultry Farm improved production and gained visibility into energy consumption."
}
]