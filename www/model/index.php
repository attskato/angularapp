<?php

ini_set('display_errors', 'on');

error_reporting(E_ALL);

require_once '../../config/setup.ini';

class IndexController{
  
  function __construct(){
    
    $model = new IndexModel;

    if (isset($_GET['id'])) {
      $data = $model->get_data($_GET['id']);
    } else if (isset($_POST['title'])) {
      $model->create_data($_POST['title']);
    } else if (isset($_POST['delete_id'])) {
      $model->delete_data($_POST['delete_id']);
    } else {
      $data = $model->get_all_data();
    } 
    header('Content-Type: application/json');
    echo json_encode($data);
  }

}

new IndexController;