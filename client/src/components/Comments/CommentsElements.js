import styled from 'styled-components'
import { AiFillDislike, AiFillLike} from 'react-icons/ai'
import { FaReply } from 'react-icons/fa'

export const LikeButton = styled(AiFillLike)`
    margin: 0px 8px;
    font-size: 28px;
`

export const DislikeButton = styled(AiFillDislike)`
margin: 0px 8px;
font-size: 28px;
`

export const ReplyComment = styled(FaReply)`
margin: 0px 8px;
font-size: 28px;
`

export const FooterContents = styled.div`   
    display: flex;
    justify-content: space-between;
`