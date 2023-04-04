INSERT INTO library (library_id,library_name,last_updated,address_id) 
VALUES (%s::UUID, %s, %s, %s::UUID);