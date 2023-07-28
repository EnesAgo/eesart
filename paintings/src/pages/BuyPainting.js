import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import expObj from "../firebase/firebaseInit";
import { doc, onSnapshot} from "firebase/firestore";

import Slider from "react-slick";

function BuyPainting() {

    const { docId } = useParams()
    const {firestoreDb} = expObj
    const docRef = doc(firestoreDb, 'paintings', docId);

    const [painting, setPainting] = useState()
    const [images, setImages] = useState()


    async function GetDocs(){

        const unsub = onSnapshot(docRef, (doc) => {
            setPainting(doc.data())
            console.log(doc.data())
        });
    }

    useEffect(() => {
        GetDocs()
    }, [])
    useEffect(() => {


    }, [painting])


    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        variableWidth: true

    };

    return (
        <>

            <section className={"buyProduct"}>

                <section>
                    <Slider {...settings} >
                        {painting && painting.imgs.map(e => (
                            <div>
                                <img src={e} alt={e} width={"400px"}/>
                            </div>
                        ))}
                    </Slider>
                </section>
                <section>

                </section>

            </section>

        </>
    )
}

export default BuyPainting