<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;
    protected $table = 'subject';
    public $timestamps = false;
    /*
    CREATE TABLE `subject` (
        `name` VARCHAR(225) NOT NULL COLLATE 'utf8mb4_general_ci',
        `credit` INT(11) NOT NULL,
        `class` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
        `for` VARCHAR(225) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
        `total_student` INT(11) NOT NULL DEFAULT '0',
        `day` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
        `shift` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
        `at` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
        `lectures` VARCHAR(225) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci'
    )
    COLLATE='utf8mb4_general_ci'
    ENGINE=InnoDB
    ;
    */
}
