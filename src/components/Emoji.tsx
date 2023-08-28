import meh from '../assets/meh.webp'
import tumbsUp from '../assets/thumbs-up.webp'
import bullsEye from '../assets/bulls-eye.webp'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
    rating: number
}

const Emoji = ({ rating }: Props) => {
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: 'Meh', boxSize: '25px' },
        4: { src: tumbsUp, alt: 'Recomanded', boxSize: '25px' },
        5: { src: bullsEye, alt: 'Exceptional', boxSize: '35px' },
    }
    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
    )
}

export default Emoji