import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

//here we created a componennt PostAuthor that will take charge of getting the users from the selectAllUsers Slice 
const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers);

//we assign the users to the author vairable.
    const author = users.find(user => user.id === userId)
  return (
      //we checking if the author has name of not.
    <span> by { author ? author.name : "Unknown Author"} </span>
  )
}

export default PostAuthor;