import AspectBasedBox from "pages/Components/Dashboard/AspectBasedBox";
import AspectBasedList from "pages/Components/Dashboard/AspectBasedList";

export default function AspectBasedPanel(){
    return (<>
    <div className="bg-white shadow-sm w-full h-full">
        <AspectBasedBox/>
        <AspectBasedList/>
    </div>
    </>)
}