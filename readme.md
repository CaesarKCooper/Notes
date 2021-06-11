
//Add the following movies to the movies table using an insert statement:

	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Howard the Duck', '110', 'Sci-Fi', '4.6', 'PG');
	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Lavalantula', '83', 'Horror', '4.7', 'TV-14');
	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Starship Troopers', '129', 'Sci-Fi', '7.2', 'PG-13');
	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Waltz With Bashir', '90', 'Documentary', '8.0', 'R');
	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Spaceballs', '96', 'Comedy', '7.1', 'PG');
	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Monsters Inc.', '92', 'Animation', '8.1', 'G');

//Add a few more movies of your choosing.

	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Movie One', '111', 'Sci-Fi', '6.7' , 'R');
	INSERT INTO movies (title, runtime, genre, imdb_score, rating)
	VALUES ('Movie Two', '101', 'Comedy', '7.6' , 'PG-13');

//Create a query to find all movies in the Sci-Fi genre.

	SELECT * FROM movies

//Create a query to find all films that scored at least a 6.5 on IMDB

	SELECT * FROM movies where imdb_score >= 6.5

//For parents who have young kids, but who don't want to sit through long children's movies, create a query to find all of the movies rated G or PG that are less than 100 minutes long.

	SELECT * FROM movies WHERE rating = 'G' OR rating = 'PG' AND runtime < '100'

//Create a query to show the average runtimes of movies scoring below a 7.5 on imdb, grouped by their respective genres.

	SELECT title, AVG(runtime) FROM movies WHERE imdb_score < '7.5' GROUP BY title, genre

//There's been a data entry mistake; Starship Troopers is actually rated R, not PG-13. Create a query that finds the movie by its title and changes its rating to R.

	UPDATE movies SET rating = 'R' WHERE title = 'Starship Troopers';

//Show the ID number and rating of all of the Horror and Documentary movies in the database. Do this in only one query.

	SELECT id, rating FROM movies WHERE genre = 'Horror' OR genre = 'Documentary';

//This time let's find the average, maximum, and minimum IMDB score for movies of each rating.

(SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'TV-14') UNION 
(SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'PG-13') UNION
(SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'PG') UNION
(SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'R') UNION 
(SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'G

//That last query isn't very informative for ratings that only have 1 entry. Use a HAVING COUNT(asterik) > 1 clause to only show ratings with multiple movies showing.

(SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'TV-14' HAVING COUNT(*) > 1) UNION (SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'PG-13' HAVING COUNT(*) > 1) UNION (SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'PG' HAVING COUNT(*) > 1) UNION (SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'R' HAVING COUNT(*) > 1) UNION (SELECT rating, AVG(imdb_score), MAX(imdb_score), MIN(imdb_score) FROM movies WHERE rating = 'G' HAVING COUNT(asterick) > 1)

//Let's make our movie list more child-friendly. Delete all entries that have a rating of R. Remember to record your query in script.sql.

DELETE FROM movies WHERE rating = 'R';









