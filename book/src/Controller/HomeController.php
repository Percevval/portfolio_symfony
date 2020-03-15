<?php
    
namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
    
class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

        /**
     * @Route("/api/cv", name="cv")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getCv()
    {
        $cv = [
                'id' => 1,
                'imageURL' => 'public/img/CV-Nicolas-Gretten Octobre 2019.jpg'
        ];
    
        // $response = new Response();

        // $response->headers->set('Content-Type', 'application/json');
        // $response->headers->set('Access-Control-Allow-Origin', '*');

        // $response->setContent(json_encode($cv));
        
        // return $response;

        return new JsonResponse($users);
    }

}