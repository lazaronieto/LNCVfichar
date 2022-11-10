<?php
/**
 *
 * Descripcion: Controlador para el panel principal de los usuarios logueados
 *
 * @category    
 * @package     Controllers 
 */
 Load::models('sistema/estado_usuario', 'inicio/registro');

class FicharController extends BackendController {
    
    public $page_title = 'Mis Fichajes';
    
    public $page_module = 'Inicio';
    
    public $entrada;
    public $salida;
    
    public function index() { 
    
    //se verifica si se ha enviado via POST los datos
        if ( ! Input::hasPost('registro')) {
            return;
        }
            
        //Intenta guardar el usuario
        if ((new Registro)->create(Input::post('registro'))) {
            //Mensaje de éxito 
            Flash::valid('registro creado');
            //Elimina los datos del POST, muestra limpio el formulario
            Input::delete();
            return;
        }
        //Mensaje de fallo 
        Flash::error('Falló al intentar crear el registro');
        
    }
    
    public function registro()
    {
        //se verifica si se ha enviado via POST los datos
        if ( ! Input::hasPost('registro')) {
            return;
        }
            
        //Intenta guardar el usuario
        if ((new Registro)->create(Input::post('registro'))) {
            //Mensaje de éxito 
            Flash::valid('registro creado');
            //Elimina los datos del POST, muestra limpio el formulario
            Input::delete();
            return;
        }
        //Mensaje de fallo 
        Flash::error('Falló al intentar crear el registro');
    }

}
