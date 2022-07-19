import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-brands, fa-github} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    // const icons = [
    //     {
    //         name: "fab fa-github",
    //         link: "https://github.com/wingky1208"
    //     },
    //     {
    //         name: "fab fa-linkedin",
    //         link: "https://www.linkedin.com/in/wingky-liang-6664a6231/"
    //     },
    //     {
    //         name: "fab fa-stack-overflow",
    //         link: ""
    //     }
    // ]

    return (
        <FontAwesomeIcon icon={["fab", "github"]} />

        // <section>
        //     <footer className="container">
        //         <div className="row">
        //             <div className="col-lg-8 mx-auto text-center">
        //                 {icons.map(icon =>
        //                 (
        //                     <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        //                 )
        //                 )}
        //             </div>
        //         </div>
        //     </footer>
        // </section>

    );
}
