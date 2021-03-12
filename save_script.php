<?php

if (!isset($_POST['script']) || $_POST['script'] == "")
	die('no_content');

$script = $_POST['script'];

$filename = ".";

if (isset($_POST['filename']) && $_POST['filename'] !== "")
	$filename = $_POST['filename'];
else {
	$timeout = 10;
	while (file_exists("saved_scripts/$filename") && $timeout > 0) {
		$filename = substr(md5(time()),0, 8) . ".lua";
		$timeout--;
	}

	if ($timeout === 0)
		die('timeout');
}

$result = file_put_contents("saved_scripts/$filename", $script);

if ($result === false)
	die('unable_to_write;' . $filename);

echo $filename;