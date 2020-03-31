import React from "react";
import Avatar from "avataaars";

export default function Avatars(props){

    switch (props.avatar) {
        case 0 :
            return(
                <Avatar
                    avatarStyle='Circle'
                    topType='LongHairStraight'
                    accessoriesType='Prescription02'
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType='BlazerShirt'
                    eyeType='Default'
                    eyebrowType='Default'
                    mouthType='Twinkle'
                    skinColor='Light'
                />
            )
        case 1 :
            return(
                <Avatar
                    avatarStyle='Circle'
                    topType='WinterHat1'
                    accessoriesType='Wayfarers'
                    hatColor='PastelGreen'
                    hairColor='Platinum'
                    facialHairType='BeardMagestic'
                    facialHairColor='Brown'
                    clotheType='GraphicShirt'
                    clotheColor='Blue03'
                    graphicType='Skull'
                    eyeType='Cry'
                    eyebrowType='DefaultNatural'
                    mouthType='Twinkle'
                    skinColor='Pale'
                />
            )
        case 2 :
            return(
                <Avatar
                    avatarStyle='Circle'
                    topType='ShortHairShortWaved'
                    accessoriesType='Wayfarers'
                    hairColor='Black'
                    facialHairType='MoustacheMagnum'
                    facialHairColor='BlondeGolden'
                    clotheType='ShirtScoopNeck'
                    clotheColor='PastelGreen'
                    eyeType='Dizzy'
                    eyebrowType='SadConcerned'
                    mouthType='Tongue'
                    skinColor='Yellow'
                />
            )
    }
}