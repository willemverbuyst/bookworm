import { BookwormData } from "../../models";

export const returnBookwormObject = (bookworm: BookwormData) => ({
  id: bookworm.id,
  "first name": bookworm.first_name,
  "last name": bookworm.last_name,
  email: bookworm.email,
  phone: bookworm.phone,
  userIsActive: bookworm.user_is_active,
  library: bookworm.library,
});
