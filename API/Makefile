postgres:
	docker run --name kentta12 -p 5432:5432	-e POSTGRES_USER=root -e POSTGRES_PASSWORD=passwd -d postgres:12-alpine

createdb:
	docker exec -it kentta12 createdb --username=root --owner=root kenttaDB

dropdb:
	docker exec -it kentta12 dropdb kenttaDB

migrateup:
	migrate -path db/migration -database "postgresql://root:passwd@localhost:5432/kenttaDB?sslmode=disable" --verbose up

migratedown:
	migrate -path db/migration -database "postgresql://root:passwd@localhost:5432/kenttaDB?sslmode=disable" --verbose down

.PHNOY: postgres createdb dropdb migrateup migratedown 
