import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Laundromat Services',
        description: 'Visit the economy laundromat in Austin, over 50 machines and fully attended.'
    },
    {
        icon: <FiLayers />,
        title: 'Wash & Fold Laundry',
        description: `Don't have time to do your laundry? Throw onus laundromat will do it for you.`
    },
    {
        icon: <FiUsers />,
        title: 'Pickup & Delivery',
        description: 'pickup and delivery, when you use our laundry and dry cleaning services.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Commercial Laundry',
        description: 'We will pick up and deliver your linens, towels, uniforms, and laundry free of charge.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
