import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import expObj from "../firebase/firebaseInit";
import { doc, onSnapshot} from "firebase/firestore";
import ImageSlider from "../view/ImageSlider";


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

        if(painting){
            const altImages = [];
            painting.imgs.forEach(e => {
                altImages.push({
                    src: e,
                    alt: painting.desc
                })
            })
            setImages(altImages)
        }

    }, [painting])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>

            <section className={"buySection section"}>

                <section className={"slider"}>

                    {
                        images && <ImageSlider data={images} />
                    }
                    <h1>{painting && painting.name}</h1>

                </section>
                <section className={"buyProgress"}>

                </section>

            </section>
            <section className={"section buyDetailSection"}>

            </section>

        </>
    )
}

export default BuyPainting