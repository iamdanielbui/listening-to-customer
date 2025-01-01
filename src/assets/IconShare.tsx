import { SVGAttributes } from "react";
interface IconShareProps extends SVGAttributes<SVGElement> {
  size?: number | string;
}
const IconShare = ({ size = "24px", ...props }: IconShareProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6 23q-.825 0-1.412-.587T4 21V10q0-.825.588-1.412T6 8h2q.425 0 .713.288T9 9t-.288.713T8 10H6v11h12V10h-2q-.425 0-.712-.288T15 9t.288-.712T16 8h2q.825 0 1.413.588T20 10v11q0 .825-.587 1.413T18 23zm5-18.175l-.9.9q-.3.3-.7.288T8.7 5.7q-.275-.3-.287-.7t.287-.7l2.6-2.6q.3-.3.7-.3t.7.3l2.6 2.6q.275.275.275.688T15.3 5.7q-.3.3-.712.3t-.713-.3L13 4.825V15q0 .425-.288.713T12 16t-.712-.288T11 15z"
      />
    </svg>
  );
};

export default IconShare;
