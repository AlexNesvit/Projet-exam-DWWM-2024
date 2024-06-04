<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ByiController extends AbstractController
{
    #[Route('/byi', name: 'app_byi')]
    public function index(): Response
    {
        return $this->render('byi/index.html.twig', [
            'controller_name' => 'ByiController',
        ]);
    }
}
