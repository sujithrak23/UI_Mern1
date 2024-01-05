import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebaritem'>
        <span className='sidebartitle'><b> About Our Website</b></span>  
        <img className='sidebarimg'
        src=".\food-img5.jpg"
        alt='' />
        <p className='sidebartext'>
     
        Sahni says these decisions support the hauora of te taiao, 
        as well as helping customers connect with what 
        they’re eating and be present with the kai.

        </p>
      </div>  

      
     
     <div className='sidebaritem'>
        <span className='sidebartitle'><b> Our Menu Card</b></span> 
        <img className='menuimage'
         src='https://ngaitahu.iwi.nz/wp-content/uploads/2020/07/TK86-SUPER132.jpg'
         alt='menuimage'
      />
     </div>
 
     <div className='sidebaritem'>
        <span className='sidebartitle'><b> Our Chefs</b></span> 
        <img className='chefimage'
         src='https://s3.envato.com/files/260527233/1210113.jpg'
         alt='chefimage'
      />
      <p className='cheftext'>
      A chef or cook plans, prepares and cooks food by using a variety 
      of cooking techniques. A chef usually works in a hotel or a restaurant. 
      They may also work for a contract catering company, providing food for
      events. Cooks are more likely to work in hospitals, schools, works 
      canteens, cafes or fast food outlets.
      </p>
     </div>

     <div className='sidebaritem'>
        <span className='sidebartitle'><b> On Board Feast</b></span> 
        <ul className='sidebarlist' >
            <li className='sidelistitems'>Breakfast</li>
            <li className='sidelistitems'>Lunch</li>
            <li className='sidelistitems'>Dinner</li>
            <li className='sidelistitems'>Starters</li>
            <li className='sidelistitems'>Juices</li>
            <li className='sidelistitems'>Icecreams</li>

        </ul>
     </div>

    
    </div>
  )
};

export default  Sidebar;
