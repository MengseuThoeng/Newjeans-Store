import { setUsername } from "@/redux/features/userProfile/userProfileSlice";

// Assuming you get the username from the login response
const username = "example_username";

dispatch(setUsername(username));