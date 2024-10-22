import { Helmet } from 'react-helmet';
import Hotels from './PopularHotelsSection';
import Shops from './FamousShopSection';
import Restaurants from './TopRestaurantsSection';
import Bars from './TopBars'

export default function top(){
    return(
        <>
                <Helmet>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

                    
                    <link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="style.css"/>
                 </Helmet>
                 <section class="hotel-bg">
                 <div class="hotel-overlay">
                    <svg  id="Layer_1" x="0px" y="0px"
                        viewBox="0 0 300 300">
                    <circle fill="#FFFFFF" cx="585.24" cy="345.001" r="174.523"/>
                    <path fill="#FFFFFF" d="M849.874-71.046L744.595-2.283c50.05,30.524,94.241,72.338,128.376,124.602
                        C995.76,310.315,942.711,563.15,754.714,685.94l-633.173,413.554L87.752,1260.53l730.587-477.178
                        c241.708-157.87,309.915-482.952,152.045-724.66C936.934,7.479,895.954-35.914,849.874-71.046z"/>
                    <path fill="#FFFFFF" d="M214.189,761.051l105.28-68.764c-50.052-30.525-94.242-72.341-128.378-124.604
                        C68.304,379.688,121.354,126.85,309.348,4.061l633.177-413.556l33.785-161.035L245.725-93.351
                        C4.016,64.52-64.191,389.6,93.68,631.309C127.129,682.521,168.107,725.911,214.189,761.051z"/>
                    <path fill="#FFFFFF" d="M374.464,656.367l124.208-81.126c-63.787-9.27-123.446-44.787-161.463-102.992
                        c-70.277-107.6-40.022-251.794,67.575-322.071l487.058-318.119l33.787-161.036L341.159,52.766
                        c-161.14,105.248-206.61,321.967-101.364,483.106C274.539,589.063,321.433,629.643,374.464,656.367z"/>
                    </svg>
                    </div>

                 <Shops/>
                
                 <Restaurants/>
                 <Hotels/>
                 <Bars/>
                 </section>
        </>
    )
}