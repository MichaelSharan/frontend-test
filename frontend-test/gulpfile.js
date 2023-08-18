// Основной модуль
import gulp from 'gulp';
// Импорт путей
import { path } from "./gulp/config/path.js";

global.app = {
    path: path,
    gulp: gulp,
}