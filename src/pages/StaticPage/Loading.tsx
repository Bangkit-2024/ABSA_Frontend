import logo from "assets/images/brand/BIZZAGI.png"
import {useSelector, useDispatch} from "react-redux";
import {ReactElement, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {bootstrap} from 'slices/thunk'


function Loading() : ReactElement{    
    const list_text = ["Loading...", "Mempersiapkan Data", "Memproses", "Tunggu Sebentar"]
    
    const [txtIdx, setTxtIdx] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTxtIdx(prevState => prevState + 1);
        }, 3000)
    }, []);

    const dispatch = useDispatch()<any>;

    useEffect(() => {
        toast.promise(dispatch(bootstrap()).unwrap(), {
            pending: "Mengambil Data",
            success: "Berhasil Memproses Data",
            error: "Gagal Memproses Data"
        })
    }, [])

    return <>
        <div className="flex content-center items-center animate-pulse h-[100vh] m-0 p-0">
            <div className="content-center w-[100vw]">
                <img src={logo} alt="" width="150vw" className={"object-center mx-auto"}/>
                <h1 className="text-sm mt-5 font-thin text-center  font-public">{list_text[txtIdx % list_text.length]}</h1>
            </div>
        </div>

    </>

}

export default Loading;