import { Icons } from "./interface";
import { FaStar, FaFemale, FaMale } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { VscTriangleDown } from "react-icons/vsc";
import { LuAudioLines } from "react-icons/lu";

export const AudioIcon = ({color, size}:Icons) => {
  return (
    <LuAudioLines size={size} color={color}/>
  )
}

export const ArrowRight = ({color, size}:Icons) => {
  return (
    <FaArrowRight size={size} color={color}/>
  )
}

export const AngleLeft = ({color, size}:Icons) => {
  return (
    <FaAngleLeft size={size} color={color}/>
  )
}

export const AngleRight = ({color, size}:Icons) => {
  return (
    <FaAngleRight size={size} color={color}/>
  )
}

export const AngleDown = ({color, size}:Icons) => {
  return (
    <VscTriangleDown size={size} color={color}/>
  )
}

export const Star = ({color, size}:Icons) => {
  return (
    <FaStar size={size} color={color}/>
  )
}

export const Female = ({color, size}:Icons) => {
  return (
    <FaFemale size={size} color={color}/>
  )
}

export const Male = ({color, size}:Icons) => {
  return (
    <FaMale size={size} color={color}/>
  )
}

export const Cancel = ({color, size}:Icons) => {
  return (
    <MdCancel size={size} color={color}/>
  )
}
