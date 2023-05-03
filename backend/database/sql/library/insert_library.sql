INSERT INTO library (library_id,name_of_library,last_updated,address_id) 
VALUES (%s::UUID, %s, %s, %s::UUID);