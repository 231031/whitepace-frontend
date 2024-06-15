
interface dataProps {
    text: string;
    icon: any;
}
export default function Detailplan({ text, icon }: dataProps) {
    return (
        <div className="flex flex-row mb-5 text-xs">
            <img src={icon} className="w-5 h-5 mr-3"></img>
            <p>{text}</p>
        </div>
    )
}
