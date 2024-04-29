import { toast } from "react-toastify"

const Notification = (content, status) => {
    toast[status](content);
}

export default Notification;