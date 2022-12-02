/*----------------------------------------------------*/
/*-- Desactivar Click Derecho en Imágenes y Enlaces --*/
/*----------------------------------------------------*/

$(document).ready(function() {
	$("a,img,svg").on("contextmenu",function() {
		return false;
	})
})

/*------------------------------------------------*/
/*-- Desactivar Arrastrar en Imágenes y Enlaces --*/
/*------------------------------------------------*/

$(document).ready(function() {
	$("a,img,svg").on("dragstart",function() {
		return false;
	})
})

/*----------------------------*/
/*-- Ocultar Ménu al Inicio --*/
/*----------------------------*/

$(document).ready(function() {
	setTimeout(function() {
		AnchoMenu = $(".MenuContenedor").outerWidth();

		$(".MenuContenedor").css("left","-=" + AnchoMenu);
		$(".MenuIcono").css("opacity","0");
		setTimeout(function() {
			$(".MenuIcono").attr("src","../../../Gal_SVGS_Compartidos/Menu_Icono.svg");
			$(".MenuIcono").css("width","1.6rem");
			$(".MenuIcono").css("opacity","1");
		},150);
	},1500);
})

/*--------------------------------------------------*/
/*-- Optimizar la Carga de Imágenes con Lazy Load --*/
/*--------------------------------------------------*/

$(document).ready(function() {
	$(".ImagenIcono,.LinkIcono").lazyload({
		threshold:200,
		effect:"fadeIn"
	})
})

/*--------------------------------------*/
/*-- Mostrar y Ocultar Menú con Click --*/
/*--------------------------------------*/

$(document).ready(function() {
	$(".BotonMenu").click(function() {
		AnchoMenu = $(".MenuContenedor").outerWidth();

		if ($(".MenuIcono").attr("src") == "../../../Gal_SVGS_Compartidos/Menu_Icono.svg") {
			$(".MenuContenedor").css("left","0");
			$(".MenuIcono").css("opacity","0");
			setTimeout(function() {
				$(".MenuIcono").css("width","1rem");
				$(".MenuIcono").attr("src","../../../Gal_SVGS_Compartidos/Menu_Contraer_Icono.svg");
				$(".MenuIcono").css("opacity","1");
			},150);
		} else {
			$(".MenuContenedor").css("left","-=" + AnchoMenu);
			$(".MenuIcono").css("opacity","0");
			setTimeout(function() {
				$(".MenuIcono").css("width","1.6rem");
				$(".MenuIcono").attr("src","../../../Gal_SVGS_Compartidos/Menu_Icono.svg");
				$(".MenuIcono").css("opacity","1");
			},150);
			setTimeout(function() {
				$(".BotonesContenedorPrincipal").css("height","4.2rem");
				setTimeout(function() {
					$(".BotonesContenedorPrimario").css("display","none");
					$(".BotonCompartir").css("background","#343A40");
					$(".BotonCompartir").find(".IconoColor").css("fill","#C2C7D0");
					$(".BotonCompartir").find(".DatoTexto").css("color","#C2C7D0");
				},200);
			},300);
		}
	})
})

/*----------------------------------------------*/
/*-- Ocultar Menú con Click en Botones de Menú--*/
/*----------------------------------------------*/

$(document).ready(function() {
	$(".BotonDato,.BotonRedSocial,.BotonRedSocialCompartir").click(function() {
		AnchoMenu = $(".MenuContenedor").outerWidth();

		$(".MenuContenedor").css("left","-=" + AnchoMenu);
		$(".MenuIcono").css("opacity","0");
		setTimeout(function() {
			$(".MenuIcono").css("width","1.6rem");
			$(".MenuIcono").attr("src","../../../Gal_SVGS_Compartidos/Menu_Icono.svg");
			$(".MenuIcono").css("opacity","1");
		},150);
		setTimeout(function() {
			$(".BotonesContenedorPrincipal").css("height","4.2rem");
			setTimeout(function() {
				$(".BotonesContenedorPrimario").css("display","none");
				$(".BotonCompartir").css("background","#343A40");
				$(".BotonCompartir").find(".IconoColor").css("fill","#C2C7D0");
				$(".BotonCompartir").find(".DatoTexto").css("color","#C2C7D0");
			},200);
		},300);
	})
})

/*---------------------*/
/*-- Hover para Menú --*/
/*---------------------*/

$(document).ready(function() {
	$(".Menu").hover(function() {
	}, function() {
		AnchoMenu = $(".MenuContenedor").outerWidth();

		$(".MenuContenedor").css("left","-=" + AnchoMenu);
		$(".MenuIcono").css("opacity","0");
		setTimeout(function() {
			$(".MenuIcono").css("width","1.6rem");
			$(".MenuIcono").attr("src","../../../Gal_SVGS_Compartidos/Menu_Icono.svg");
			$(".MenuIcono").css("opacity","1");
		},150);
		setTimeout(function() {
			$(".BotonesContenedorPrincipal").css("height","4.2rem");
			setTimeout(function() {
				$(".BotonesContenedorPrimario").css("display","none");
				$(".BotonCompartir").css("background","#343A40");
				$(".BotonCompartir").find(".IconoColor").css("fill","#C2C7D0");
				$(".BotonCompartir").find(".DatoTexto").css("color","#C2C7D0");
			},200);
		},300);
	})
})

/*------------------------------------------------------------------*/
/*-- Actualizar Posición del Menú al Cambiar el Tamaño de Ventana --*/
/*------------------------------------------------------------------*/

$(document).ready(function() {
	$(window).resize(function() {
		AnchoMenu = $(".MenuContenedor").outerWidth();

		if ($(".MenuContenedor").css("left") != "0" && $(".MenuContenedor").css("left") != AnchoMenu) {
			if ($(".MenuIcono").attr("src") == "../../../Gal_SVGS_Compartidos/Menu_Icono.svg") {
				$(".MenuContenedor").css("left","-=" + AnchoMenu);
			} else {
				$(".MenuContenedor").css("left","0");
			}
		}
	})
})

/*------------------------------------------*/
/*-- Hover para Botones de Datos del Menú --*/
/*------------------------------------------*/

$(document).ready(function() {
	$(".BotonDato").hover(function() {
		$(this).css("background","#494E53");
		$(this).find(".IconoColor").css("fill","#FFFFFF");
		$(this).find(".DatoTexto").css("color","#FFFFFF");
	}, function() {
		$(this).css("background","#343A40");
		$(this).find(".IconoColor").css("fill","#C2C7D0");
		$(this).find(".DatoTexto").css("color","#C2C7D0");
	})
})

/*---------------------------------------------------*/
/*-- Hover para Botones de Redes Sociales del Menú --*/
/*---------------------------------------------------*/

$(document).ready(function() {
	$(".BotonRedSocial").hover(function() {
		$(this).find(".IconoColor").css("fill","#FFFFFF");
		if ($(this).attr("id") == "BotonFacebook") {
			$(this).css("background","#3B5998");
		} else {
			if ($(this).attr("id") == "BotonTwitter") {
				$(this).css("background","#1DA1F2");
			} else {
				if ($(this).attr("id") == "BotonLinkedIn") {
					$(this).css("background","#0077B5");
				} else {
					if ($(this).attr("id") == "BotonInstagram") {
						$(this).css("background","#7246B3");
					} else {
						if ($(this).attr("id") == "BotonYouTube") {
							$(this).css("background","#CD2929");
						}
					}
				}
			}
		}
	}, function() {
		$(this).css("background","#343A40");
		$(this).find(".IconoColor").css("fill","#C2C7D0");
	})
})

/*--------------------------------------------*/
/*-- Hover para Botón de Compartir del Menú --*/
/*--------------------------------------------*/

$(document).ready(function() {
	$(".BotonCompartir").hover(function() {
		if ($(".BotonesContenedorPrimario").css("display") == "none") {
			$(this).css("background","#494E53");
			$(this).find(".IconoColor").css("fill","#FFFFFF");
			$(this).find(".DatoTexto").css("color","#FFFFFF");
		}
	}, function() {
		if ($(".BotonesContenedorPrimario").css("display") == "none") {
			$(this).css("background","#343A40");
			$(this).find(".IconoColor").css("fill","#C2C7D0");
			$(this).find(".DatoTexto").css("color","#C2C7D0");
		}
	})
})

/*-------------------------------------------------------------*/
/*-- Mostrar y Ocultar Botones de Compartir (Redes Sociales) --*/
/*-------------------------------------------------------------*/

$(document).ready(function() {
	$(".BotonCompartir").click(function() {
		if ($(".BotonesContenedorPrimario").css("display") == "none") {
			$(".BotonesContenedorPrimario").css("display","block");
			$(".BotonesContenedorPrincipal").css("height","8.4rem");
		} else {
			$(".BotonesContenedorPrincipal").css("height","4.2rem");
			$(".BotonesContenedorPrimario").css("display","none");
		}
	})
})

/*------------------------------------------------------*/
/*-- Hover para Botones de Compartir (Redes Sociales) --*/
/*------------------------------------------------------*/

$(document).ready(function() {
	$(".BotonRedSocialCompartir").hover(function() {
		$(this).find(".IconoColor").css("fill","#FFFFFF");
		if ($(this).attr("id") == "FacebookCompartir") {
			$(this).css("background","#3B5998");
		} else {
			if ($(this).attr("id") == "TwitterCompartir") {
				$(this).css("background","#1DA1F2");
			} else {
				if ($(this).attr("id") == "LinkedInCompartir") {
					$(this).css("background","#0077B5");
				} else {
					if ($(this).attr("id") == "WhatsAppCompartir") {
						$(this).css("background","#13AA07");
					}
				}
			}
		}
	}, function() {
		$(this).css("background","#494E53");
		$(this).find(".IconoColor").css("fill","#C2C7D0");
	})
})

/*------------------------------------------------------*/
/*-- Botones de Menú Compartir (Función de Compartir) --*/
/*------------------------------------------------------*/

$(document).ready(function() {
	const TituloEmpresa = document.title;
	const URLGaleria = encodeURIComponent(window.location.href);
	const Imagen = encodeURIComponent($("meta[property='og:image']").attr("content"));

	$("#FacebookCompartir").click(function() {
		open_window("https://www.facebook.com/sharer/sharer.php?u=" + URLGaleria,"Facebook");
	})

	$("#TwitterCompartir").click(function() {
		open_window("https://twitter.com/share?url=" + URLGaleria,"Twitter");
	})

	$("#LinkedInCompartir").click(function() {
		open_window("https://www.linkedin.com/shareArticle?mini=true&url=" + URLGaleria + "&title=" + TituloEmpresa + "&summary=&source=","LinkedIn");
	})

	$("#WhatsAppCompartir").click(function() {
		open_window("https://api.whatsapp.com/send?text=" + URLGaleria,"WhatsApp");
	})

	function open_window(url,name) {
		window.open(url,name,"width=800,height=700,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,directories=no,status=no");
	}
})

/*------------------------------------*/
/*-- Hover para Galería de Imágenes --*/
/*------------------------------------*/

$(document).ready(function() {
	$(".ImagenIcono").hover(function() {
		if(window.matchMedia("(min-width:1920px)").matches) {
			$(this).parent().css("padding","0.4rem");
		} else {
			if(window.matchMedia("(min-width:1600px)").matches) {
				$(this).parent().css("padding","0.3rem");
			} else {
				if(window.matchMedia("(min-width:1280px)").matches) {
					$(this).parent().css("padding","0.2rem");
				} else {
					if(window.matchMedia("(min-width:1024px)").matches) {
						$(this).parent().css("padding","0.3rem");
					} else {
						if(window.matchMedia("(min-width:800px)").matches) {
							$(this).parent().css("padding","0.2rem");
						} else {
							if(window.matchMedia("(min-width:600px)").matches) {
								$(this).parent().css("padding","0rem");
							} else {
								if(window.matchMedia("(min-width:480px)").matches) {
									$(this).parent().css("padding","0.1rem");
								} else {
									if(window.matchMedia("(min-width:320px)").matches) {
										$(this).parent().css("padding","0rem");
									} else {
										if(window.matchMedia("(min-width:240px)").matches) {
											$(this).parent().css("padding","0rem");
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}, function() {
		if(window.matchMedia("(min-width:1920px)").matches) {
			$(this).parent().css("padding","1.4rem");
		} else {
			if(window.matchMedia("(min-width:1600px)").matches) {
				$(this).parent().css("padding","1.2rem");
			} else {
				if(window.matchMedia("(min-width:1280px)").matches) {
					$(this).parent().css("padding","1.1rem");
				} else {
					if(window.matchMedia("(min-width:1024px)").matches) {
						$(this).parent().css("padding","1rem");
					} else {
						if(window.matchMedia("(min-width:800px)").matches) {
							$(this).parent().css("padding","0.9rem");
						} else {
							if(window.matchMedia("(min-width:600px)").matches) {
								$(this).parent().css("padding","0.9rem");
							} else {
								if(window.matchMedia("(min-width:480px)").matches) {
									$(this).parent().css("padding","1rem");
								} else {
									if(window.matchMedia("(min-width:320px)").matches) {
										$(this).parent().css("padding","0.8rem");
									} else {
										if(window.matchMedia("(min-width:240px)").matches) {
											$(this).parent().css("padding","0.7rem");
										}
									}
								}
							}
						}
					}
				}
			}
		}
	})
})

/*---------------------------------*/
/*-- Hover para Galería de Links --*/
/*---------------------------------*/

$(document).ready(function() {
	$(".LinkIcono").hover(function() {
		if(window.matchMedia("(min-width:1920px)").matches) {
			$(this).parent().parent().css("padding","0.4rem");
		} else {
			if(window.matchMedia("(min-width:1600px)").matches) {
				$(this).parent().parent().css("padding","0.3rem");
			} else {
				if(window.matchMedia("(min-width:1280px)").matches) {
					$(this).parent().parent().css("padding","0.2rem");
				} else {
					if(window.matchMedia("(min-width:1024px)").matches) {
						$(this).parent().parent().css("padding","0.3rem");
					} else {
						if(window.matchMedia("(min-width:800px)").matches) {
							$(this).parent().parent().css("padding","0.2rem");
						} else {
							if(window.matchMedia("(min-width:600px)").matches) {
								$(this).parent().parent().css("padding","0rem");
							} else {
								if(window.matchMedia("(min-width:480px)").matches) {
									$(this).parent().parent().css("padding","0.1rem");
								} else {
									if(window.matchMedia("(min-width:320px)").matches) {
										$(this).parent().parent().css("padding","0rem");
									} else {
										if(window.matchMedia("(min-width:240px)").matches) {
											$(this).parent().parent().css("padding","0rem");
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}, function() {
		if(window.matchMedia("(min-width:1920px)").matches) {
			$(this).parent().parent().css("padding","1.4rem");
		} else {
			if(window.matchMedia("(min-width:1600px)").matches) {
				$(this).parent().parent().css("padding","1.2rem");
			} else {
				if(window.matchMedia("(min-width:1280px)").matches) {
					$(this).parent().parent().css("padding","1.1rem");
				} else {
					if(window.matchMedia("(min-width:1024px)").matches) {
						$(this).parent().parent().css("padding","1rem");
					} else {
						if(window.matchMedia("(min-width:800px)").matches) {
							$(this).parent().parent().css("padding","0.9rem");
						} else {
							if(window.matchMedia("(min-width:600px)").matches) {
								$(this).parent().parent().css("padding","0.9rem");
							} else {
								if(window.matchMedia("(min-width:480px)").matches) {
									$(this).parent().parent().css("padding","1rem");
								} else {
									if(window.matchMedia("(min-width:320px)").matches) {
										$(this).parent().parent().css("padding","0.8rem");
									} else {
										if(window.matchMedia("(min-width:240px)").matches) {
											$(this).parent().parent().css("padding","0.7rem");
										}
									}
								}
							}
						}
					}
				}
			}
		}
	})
})

/*----------------------------------------------------------------------------------*/
/*-- Click de Galería de Imágenes para Mostrar Imagen Correspondiente en LightBox --*/
/*----------------------------------------------------------------------------------*/

$(document).ready(function() {
	$(".ImagenIcono").click(function() {
		RutaImagen = $(this).attr("data-original");

		$(".Imagen").attr("src",RutaImagen);
		$(".CapaOscura").css("display","block");
		setTimeout(function() {
			$(".CapaOscura").css("opacity","1");
			setTimeout(function() {
				$(".LightBoxContenedor").css("display","block");
				setTimeout(function() {

					function mostrarImagen() {
						ImagenAncho = $(".Imagen").outerWidth();
						ImagenAlto = $(".Imagen").outerHeight();
						ImagenHorizontalAncho = (Constante * ImagenAncho) / ImagenAlto;
						ImagenHorizontalAlto = (ImagenHorizontalAncho * ImagenAlto) / ImagenAncho;
						ImagenVerticalAncho = Constante;
						ImagenVerticalAlto = (ImagenVerticalAncho * ImagenAlto) / ImagenAncho;

						if(ImagenAncho >= ImagenAlto) {
							if(ImagenHorizontalAncho >= ImagenLimiteAncho && ImagenHorizontalAlto <= ImagenLimiteAlto) {
								$(".Imagen").css("width",ImagenLimiteAncho + "px");
								$(".Imagen").css("height","auto");
								$(".CapaOscura").css("opacity","0");
								setTimeout(function() {
									$(".CapaOscura").css("display","none");
								},150);
							} else if(ImagenHorizontalAlto >= ImagenLimiteAlto) {
								$(".Imagen").css("width","auto");
								$(".Imagen").css("height",ImagenLimiteAlto + "px");
								$(".CapaOscura").css("opacity","0");
								setTimeout(function() {
									$(".CapaOscura").css("display","none");
								},150);
							} else if(ImagenHorizontalAncho <= ImagenLimiteAncho) {
								$(".Imagen").css("width","auto");
								$(".Imagen").css("height",Constante + "px");
								$(".CapaOscura").css("opacity","0");
								setTimeout(function() {
									$(".CapaOscura").css("display","none");
								},150);
							}
						} else {
							if(ImagenAlto > ImagenAncho) {
								if(ImagenVerticalAlto >= ImagenLimiteAlto && ImagenVerticalAncho <= ImagenLimiteAncho) {
									$(".Imagen").css("height",ImagenLimiteAlto + "px");
									$(".Imagen").css("width","auto");
									$(".CapaOscura").css("opacity","0");
									setTimeout(function() {
										$(".CapaOscura").css("display","none");
									},150);
								} else if(ImagenVerticalAncho >= ImagenLimiteAncho) {
									$(".Imagen").css("width",ImagenLimiteAncho + "px");
									$(".Imagen").css("height","auto");
									$(".CapaOscura").css("opacity","0");
									setTimeout(function() {
										$(".CapaOscura").css("display","none");
									},150);
								} else if(ImagenVerticalAlto <= ImagenLimiteAlto) {
									$(".Imagen").css("width",Constante + "px");
									$(".Imagen").css("height","auto");
									$(".CapaOscura").css("opacity","0");
									setTimeout(function() {
										$(".CapaOscura").css("display","none");
									},150);
								}
							}
						}
					}

					if(window.matchMedia("(min-width:1920px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
						Constante = 500;

						mostrarImagen();
					} else {
						if(window.matchMedia("(min-width:1600px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
							Constante = 450;

							mostrarImagen();
						} else {
							if(window.matchMedia("(min-width:1280px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 22;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 22;
								Constante = 400;

								mostrarImagen();
							} else {
								if(window.matchMedia("(min-width:1024px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 70 - 20.68;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 70 - 20.68;
									Constante = 376;

									mostrarImagen();
								} else {
									if(window.matchMedia("(min-width:800px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 60 - 17.6;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 60 - 17.6;
										Constante = 281.6;

										mostrarImagen();
									} else {
										if(window.matchMedia("(min-width:600px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 18.8;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 18.8;
											Constante = 300.8;

											mostrarImagen();
										} else {
											if(window.matchMedia("(min-width:480px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 40 - 15.84;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 40 - 15.84;
												Constante = 255.2;

												mostrarImagen();
											} else {
												if(window.matchMedia("(min-width:320px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 10.64;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 10.64;
													Constante = 174.8;

													mostrarImagen();
												} else {
													if(window.matchMedia("(min-width:240px)").matches) {
														ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 9.12;
														ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 9.12;
														Constante = 131.1;

														mostrarImagen();
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},150);
			},150);
		},150);
	})
})

/*----------------------------------------------*/
/*-- Maximizar y Minimizar Imagen de LightBox --*/
/*----------------------------------------------*/

$(document).ready(function() {
	$(".BotonMaximizarMinimizar").click(function() {
		$(".ImagenBotonesContenedor").css("opacity","0");
		setTimeout(function() {
			if($(".MaximizarMinimizarIcono").attr("src") == "../../../Gal_SVGS_Compartidos/Maximizar_Icono.svg") {
				$(".BotonCerrar,.BotonRetroceder,.BotonAvanzar").css("display","none");
				$(".MaximizarMinimizarIcono").attr("src","../../../Gal_SVGS_Compartidos/Minimizar_Icono.svg");

				function maximizarImagen() {
					ImagenAncho = $(".Imagen").outerWidth();
					ImagenAlto = $(".Imagen").outerHeight();
					ImagenAnchoPreliminar = (ImagenLimiteAlto * ImagenAncho) / ImagenAlto;
					ImagenAltoPreliminar = (ImagenAnchoPreliminar * ImagenAlto) / ImagenAncho;

					if(ImagenAnchoPreliminar >= ImagenLimiteAncho) {
						$(".Imagen").css("width",ImagenLimiteAncho + "px");
						$(".Imagen").css("height","auto");
						setTimeout(function() {
							$(".ImagenBotonesContenedor").css("opacity","1");
						},50);
					} else if(ImagenAnchoPreliminar < ImagenLimiteAncho) {
						$(".Imagen").css("width","auto");
						$(".Imagen").css("height",ImagenLimiteAlto + "px");
						setTimeout(function() {
							$(".ImagenBotonesContenedor").css("opacity","1");
						},50);
					}
				}

				if(window.matchMedia("(min-width:1920px)").matches) {
					ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 24;
					ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 24;

					maximizarImagen();
				} else {
					if(window.matchMedia("(min-width:1600px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 24;

						maximizarImagen();
					} else {
						if(window.matchMedia("(min-width:1280px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 22;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 22;

							maximizarImagen();
						} else {
							if(window.matchMedia("(min-width:1024px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 20.68;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 20.68;

								maximizarImagen();
							} else {
								if(window.matchMedia("(min-width:800px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 17.6;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 17.6;

									maximizarImagen();
								} else {
									if(window.matchMedia("(min-width:600px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 18.8;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 18.8;

										maximizarImagen();
									} else {
										if(window.matchMedia("(min-width:480px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 15.84;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 15.84;

											maximizarImagen();
										} else {
											if(window.matchMedia("(min-width:320px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 10.64;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 10.64;

												maximizarImagen();
											} else {
												if(window.matchMedia("(min-width:240px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 9.12;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 9.12;

													maximizarImagen();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			} else {
				$(".BotonCerrar,.BotonRetroceder,.BotonAvanzar").css("display","flex");
				$(".MaximizarMinimizarIcono").attr("src","../../../Gal_SVGS_Compartidos/Maximizar_Icono.svg");

				function minimizarImagen() {
					ImagenAncho = $(".Imagen").outerWidth();
					ImagenAlto = $(".Imagen").outerHeight();
					ImagenHorizontalAncho = (Constante * ImagenAncho) / ImagenAlto;
					ImagenHorizontalAlto = (ImagenHorizontalAncho * ImagenAlto) / ImagenAncho;
					ImagenVerticalAncho = Constante;
					ImagenVerticalAlto = (ImagenVerticalAncho * ImagenAlto) / ImagenAncho;

					if(ImagenAncho >= ImagenAlto) {
						if(ImagenHorizontalAncho >= ImagenLimiteAncho && ImagenHorizontalAlto <= ImagenLimiteAlto) {
							$(".Imagen").css("width",ImagenLimiteAncho + "px");
							$(".Imagen").css("height","auto");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAlto >= ImagenLimiteAlto) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",ImagenLimiteAlto + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAncho <= ImagenLimiteAncho) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",Constante + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						}
					} else {
						if(ImagenAlto > ImagenAncho) {
							if(ImagenVerticalAlto >= ImagenLimiteAlto && ImagenVerticalAncho <= ImagenLimiteAncho) {
								$(".Imagen").css("height",ImagenLimiteAlto + "px");
								$(".Imagen").css("width","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAncho >= ImagenLimiteAncho) {
								$(".Imagen").css("width",ImagenLimiteAncho + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAlto <= ImagenLimiteAlto) {
								$(".Imagen").css("width",Constante + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							}
						}
					}
				}

				if(window.matchMedia("(min-width:1920px)").matches) {
					ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
					ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
					Constante = 500;

					minimizarImagen();
				} else {
					if(window.matchMedia("(min-width:1600px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
						Constante = 450;

						minimizarImagen();
					} else {
						if(window.matchMedia("(min-width:1280px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 22;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 22;
							Constante = 400;

							minimizarImagen();
						} else {
							if(window.matchMedia("(min-width:1024px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 70 - 20.68;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 70 - 20.68;
								Constante = 376;

								minimizarImagen();
							} else {
								if(window.matchMedia("(min-width:800px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 60 - 17.6;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 60 - 17.6;
									Constante = 281.6;

									minimizarImagen();
								} else {
									if(window.matchMedia("(min-width:600px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 18.8;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 18.8;
										Constante = 300.8;

										minimizarImagen();
									} else {
										if(window.matchMedia("(min-width:480px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 40 - 15.84;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 40 - 15.84;
											Constante = 255.2;

											minimizarImagen();
										} else {
											if(window.matchMedia("(min-width:320px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 10.64;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 10.64;
												Constante = 174.8;

												minimizarImagen();
											} else {
												if(window.matchMedia("(min-width:240px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 9.12;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 9.12;
													Constante = 131.1;

													minimizarImagen();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},350);
	})
})

/*----------------------------------------------------------------------------------------*/
/*-- Actualizar Tamaño de Imagen Minimizada en LightBox al Cambiar el Tamaño de Ventana --*/
/*----------------------------------------------------------------------------------------*/

$(document).ready(function() {
	$(window).resize(function() {
		if($(".BotonCerrar,.BotonRetroceder,.BotonAvanzar").css("display") == "flex") {
			$(".ImagenBotonesContenedor").css("display","none");
			$(".ImagenBotonesContenedor").css("opacity","0");
			setTimeout(function() {
				$(".ImagenBotonesContenedor").css("display","flex");
			},200);
			setTimeout(function() {

				function actualizarImagenMinimizada() {
					ImagenAncho = $(".Imagen").outerWidth();
					ImagenAlto = $(".Imagen").outerHeight();
					ImagenHorizontalAncho = (Constante * ImagenAncho) / ImagenAlto;
					ImagenHorizontalAlto = (ImagenHorizontalAncho * ImagenAlto) / ImagenAncho;
					ImagenVerticalAncho = Constante;
					ImagenVerticalAlto = (ImagenVerticalAncho * ImagenAlto) / ImagenAncho;

					if(ImagenAncho >= ImagenAlto) {
						if(ImagenHorizontalAncho >= ImagenLimiteAncho && ImagenHorizontalAlto <= ImagenLimiteAlto) {
							$(".Imagen").css("width",ImagenLimiteAncho + "px");
							$(".Imagen").css("height","auto");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAlto >= ImagenLimiteAlto) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",ImagenLimiteAlto + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAncho <= ImagenLimiteAncho) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",Constante + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						}
					} else {
						if(ImagenAlto > ImagenAncho) {
							if(ImagenVerticalAlto >= ImagenLimiteAlto && ImagenVerticalAncho <= ImagenLimiteAncho) {
								$(".Imagen").css("height",ImagenLimiteAlto + "px");
								$(".Imagen").css("width","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAncho >= ImagenLimiteAncho) {
								$(".Imagen").css("width",ImagenLimiteAncho + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAlto <= ImagenLimiteAlto) {
								$(".Imagen").css("width",Constante + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							}
						}
					}
				}

				if(window.matchMedia("(min-width:1920px)").matches) {
					ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
					ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
					Constante = 500;

					actualizarImagenMinimizada();
				} else {
					if(window.matchMedia("(min-width:1600px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
						Constante = 450;

						actualizarImagenMinimizada();
					} else {
						if(window.matchMedia("(min-width:1280px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 22;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 22;
							Constante = 400;

							actualizarImagenMinimizada();
						} else {
							if(window.matchMedia("(min-width:1024px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 70 - 20.68;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 70 - 20.68;
								Constante = 376;

								actualizarImagenMinimizada();
							} else {
								if(window.matchMedia("(min-width:800px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 60 - 17.6;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 60 - 17.6;
									Constante = 281.6;

									actualizarImagenMinimizada();
								} else {
									if(window.matchMedia("(min-width:600px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 18.8;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 18.8;
										Constante = 300.8;

										actualizarImagenMinimizada();
									} else {
										if(window.matchMedia("(min-width:480px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 40 - 15.84;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 40 - 15.84;
											Constante = 255.2;

											actualizarImagenMinimizada();
										} else {
											if(window.matchMedia("(min-width:320px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 10.64;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 10.64;
												Constante = 174.8;

												actualizarImagenMinimizada();
											} else {
												if(window.matchMedia("(min-width:240px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 9.12;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 9.12;
													Constante = 131.1;

													actualizarImagenMinimizada();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},350);
		}
	})
})

/*----------------------------------------------------------------------------------------*/
/*-- Actualizar Tamaño de Imagen Maximizada en LightBox al Cambiar el Tamaño de Ventana --*/
/*----------------------------------------------------------------------------------------*/

$(document).ready(function() {
	$(window).resize(function() {
		if($(".BotonCerrar,.BotonRetroceder,.BotonAvanzar").css("display") == "none") {
			$(".ImagenBotonesContenedor").css("display","none");
			$(".ImagenBotonesContenedor").css("opacity","0");
			setTimeout(function() {
				$(".ImagenBotonesContenedor").css("display","flex");
			},200);
			setTimeout(function() {

				function actualizarImagenMaximizada() {
					ImagenAncho = $(".Imagen").outerWidth();
					ImagenAlto = $(".Imagen").outerHeight();
					ImagenAnchoPreliminar = (ImagenLimiteAlto * ImagenAncho) / ImagenAlto;
					ImagenAltoPreliminar = (ImagenAnchoPreliminar * ImagenAlto) / ImagenAncho;

					if(ImagenAnchoPreliminar >= ImagenLimiteAncho) {
						$(".Imagen").css("width",ImagenLimiteAncho + "px");
						$(".Imagen").css("height","auto");
						setTimeout(function() {
							$(".ImagenBotonesContenedor").css("opacity","1");
						},50);
					} else if(ImagenAnchoPreliminar < ImagenLimiteAncho) {
						$(".Imagen").css("width","auto");
						$(".Imagen").css("height",ImagenLimiteAlto + "px");
						setTimeout(function() {
							$(".ImagenBotonesContenedor").css("opacity","1");
						},50);
					}
				}

				if(window.matchMedia("(min-width:1920px)").matches) {
					ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 24;
					ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 24;

					actualizarImagenMaximizada();
				} else {
					if(window.matchMedia("(min-width:1600px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 24;

						actualizarImagenMaximizada();
					} else {
						if(window.matchMedia("(min-width:1280px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 22;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 22;

							actualizarImagenMaximizada();
						} else {
							if(window.matchMedia("(min-width:1024px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 20.68;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 20.68;

								actualizarImagenMaximizada();
							} else {
								if(window.matchMedia("(min-width:800px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 17.6;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 17.6;

									actualizarImagenMaximizada();
								} else {
									if(window.matchMedia("(min-width:600px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 18.8;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 18.8;

										actualizarImagenMaximizada();
									} else {
										if(window.matchMedia("(min-width:480px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 15.84;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 15.84;

											actualizarImagenMaximizada();
										} else {
											if(window.matchMedia("(min-width:320px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 10.64;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 10.64;

												actualizarImagenMaximizada();
											} else {
												if(window.matchMedia("(min-width:240px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 9.12;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 9.12;

													actualizarImagenMaximizada();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},350);
		}
	})
})

/*---------------------------------------------*/
/*-- Retroceder y Avanzar Imagen de LightBox --*/
/*---------------------------------------------*/

$(document).ready(function() {
	$(".ImagenIcono").click(function() {
		ImagenSeleccionada = $(this).parent().index() + 1;
		ImagenesCantidad = $(".ImagenIconoContenedor").length;

		/*-----------------------------------*/
		/*-- Retroceder Imagen de LightBox --*/
		/*-----------------------------------*/

		function retrocederImagen() {
			if(ImagenSeleccionada == 1) {
				ImagenSeleccionada = ImagenesCantidad;
			} else {
				ImagenSeleccionada --;
			}

			ImagenAnterior = $(".ImagenIconoContenedor:nth-child(" + ImagenSeleccionada + ")").children(".ImagenIcono").attr("data-original");

			$(".ImagenBotonesContenedor").css("opacity","0");
			setTimeout(function() {
				$(".Imagen").attr("src",ImagenAnterior);
			},200);
			setTimeout(function() {

				function mostrarImagenAnterior() {
					ImagenAncho = $(".Imagen").outerWidth();
					ImagenAlto = $(".Imagen").outerHeight();
					ImagenHorizontalAncho = (Constante * ImagenAncho) / ImagenAlto;
					ImagenHorizontalAlto = (ImagenHorizontalAncho * ImagenAlto) / ImagenAncho;
					ImagenVerticalAncho = Constante;
					ImagenVerticalAlto = (ImagenVerticalAncho * ImagenAlto) / ImagenAncho;

					if(ImagenAncho >= ImagenAlto) {
						if(ImagenHorizontalAncho >= ImagenLimiteAncho && ImagenHorizontalAlto <= ImagenLimiteAlto) {
							$(".Imagen").css("width",ImagenLimiteAncho + "px");
							$(".Imagen").css("height","auto");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAlto >= ImagenLimiteAlto) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",ImagenLimiteAlto + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAncho <= ImagenLimiteAncho) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",Constante + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						}
					} else {
						if(ImagenAlto > ImagenAncho) {
							if(ImagenVerticalAlto >= ImagenLimiteAlto && ImagenVerticalAncho <= ImagenLimiteAncho) {
								$(".Imagen").css("height",ImagenLimiteAlto + "px");
								$(".Imagen").css("width","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAncho >= ImagenLimiteAncho) {
								$(".Imagen").css("width",ImagenLimiteAncho + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAlto <= ImagenLimiteAlto) {
								$(".Imagen").css("width",Constante + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							}
						}
					}
				}

				if(window.matchMedia("(min-width:1920px)").matches) {
					ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
					ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
					Constante = 500;

					mostrarImagenAnterior();
				} else {
					if(window.matchMedia("(min-width:1600px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
						Constante = 450;

						mostrarImagenAnterior();
					} else {
						if(window.matchMedia("(min-width:1280px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 22;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 22;
							Constante = 400;

							mostrarImagenAnterior();
						} else {
							if(window.matchMedia("(min-width:1024px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 70 - 20.68;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 70 - 20.68;
								Constante = 376;

								mostrarImagenAnterior();
							} else {
								if(window.matchMedia("(min-width:800px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 60 - 17.6;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 60 - 17.6;
									Constante = 281.6;

									mostrarImagenAnterior();
								} else {
									if(window.matchMedia("(min-width:600px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 18.8;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 18.8;
										Constante = 300.8;

										mostrarImagenAnterior();
									} else {
										if(window.matchMedia("(min-width:480px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 40 - 15.84;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 40 - 15.84;
											Constante = 255.2;

											mostrarImagenAnterior();
										} else {
											if(window.matchMedia("(min-width:320px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 10.64;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 10.64;
												Constante = 174.8;

												mostrarImagenAnterior();
											} else {
												if(window.matchMedia("(min-width:240px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 9.12;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 9.12;
													Constante = 131.1;

													mostrarImagenAnterior();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},350);
		}

		$(".BotonRetroceder").on("click",function() {
			retrocederImagen();
		})

		/*--------------------------------*/
		/*-- Avanzar Imagen de LightBox --*/
		/*--------------------------------*/

		function avanzarImagen() {
			if(ImagenSeleccionada == ImagenesCantidad) {
				ImagenSeleccionada = 1;
			} else {
				ImagenSeleccionada ++;
			}

			ImagenAnterior = $(".ImagenIconoContenedor:nth-child(" + ImagenSeleccionada + ")").children(".ImagenIcono").attr("data-original");

			$(".ImagenBotonesContenedor").css("opacity","0");
			setTimeout(function() {
				$(".Imagen").attr("src",ImagenAnterior);
			},200);
			setTimeout(function() {

				function mostrarImagenSiguiente() {
					ImagenAncho = $(".Imagen").outerWidth();
					ImagenAlto = $(".Imagen").outerHeight();
					ImagenHorizontalAncho = (Constante * ImagenAncho) / ImagenAlto;
					ImagenHorizontalAlto = (ImagenHorizontalAncho * ImagenAlto) / ImagenAncho;
					ImagenVerticalAncho = Constante;
					ImagenVerticalAlto = (ImagenVerticalAncho * ImagenAlto) / ImagenAncho;

					if(ImagenAncho >= ImagenAlto) {
						if(ImagenHorizontalAncho >= ImagenLimiteAncho && ImagenHorizontalAlto <= ImagenLimiteAlto) {
							$(".Imagen").css("width",ImagenLimiteAncho + "px");
							$(".Imagen").css("height","auto");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAlto >= ImagenLimiteAlto) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",ImagenLimiteAlto + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						} else if(ImagenHorizontalAncho <= ImagenLimiteAncho) {
							$(".Imagen").css("width","auto");
							$(".Imagen").css("height",Constante + "px");
							setTimeout(function() {
								$(".ImagenBotonesContenedor").css("opacity","1");
							},50);
						}
					} else {
						if(ImagenAlto > ImagenAncho) {
							if(ImagenVerticalAlto >= ImagenLimiteAlto && ImagenVerticalAncho <= ImagenLimiteAncho) {
								$(".Imagen").css("height",ImagenLimiteAlto + "px");
								$(".Imagen").css("width","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAncho >= ImagenLimiteAncho) {
								$(".Imagen").css("width",ImagenLimiteAncho + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							} else if(ImagenVerticalAlto <= ImagenLimiteAlto) {
								$(".Imagen").css("width",Constante + "px");
								$(".Imagen").css("height","auto");
								setTimeout(function() {
									$(".ImagenBotonesContenedor").css("opacity","1");
								},50);
							}
						}
					}
				}

				if(window.matchMedia("(min-width:1920px)").matches) {
					ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
					ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
					Constante = 500;

					mostrarImagenSiguiente();
				} else {
					if(window.matchMedia("(min-width:1600px)").matches) {
						ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 24;
						ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 24;
						Constante = 450;

						mostrarImagenSiguiente();
					} else {
						if(window.matchMedia("(min-width:1280px)").matches) {
							ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 22;
							ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 22;
							Constante = 400;

							mostrarImagenSiguiente();
						} else {
							if(window.matchMedia("(min-width:1024px)").matches) {
								ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 70 - 20.68;
								ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 70 - 20.68;
								Constante = 376;

								mostrarImagenSiguiente();
							} else {
								if(window.matchMedia("(min-width:800px)").matches) {
									ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 60 - 17.6;
									ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 60 - 17.6;
									Constante = 281.6;

									mostrarImagenSiguiente();
								} else {
									if(window.matchMedia("(min-width:600px)").matches) {
										ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 80 - 18.8;
										ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 80 - 18.8;
										Constante = 300.8;

										mostrarImagenSiguiente();
									} else {
										if(window.matchMedia("(min-width:480px)").matches) {
											ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 40 - 15.84;
											ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 40 - 15.84;
											Constante = 255.2;

											mostrarImagenSiguiente();
										} else {
											if(window.matchMedia("(min-width:320px)").matches) {
												ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 10.64;
												ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 10.64;
												Constante = 174.8;

												mostrarImagenSiguiente();
											} else {
												if(window.matchMedia("(min-width:240px)").matches) {
													ImagenLimiteAncho = $(".DimensionVentana").outerWidth() - 30 - 9.12;
													ImagenLimiteAlto = $(".DimensionVentana").outerHeight() - 30 - 9.12;
													Constante = 131.1;

													mostrarImagenSiguiente();
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},350);
		}

		$(".BotonAvanzar").on("click",function() {
			avanzarImagen();
		})

		/*-----------------------------------------------------------------------------------------------------------------------------*/
		/*-- Eliminar Eventos de Click Almacenados en jQuery de los Botones Avanzar y Retroceder --------------------------------------*/
		/*-- (Para Evitar que los Eventos Anteriores se Repitan en un Nuevo Click al Momento de Cerrar y Volver a Abrir el LightBox) --*/
		/*-----------------------------------------------------------------------------------------------------------------------------*/

		$(".BotonCerrar").click(function() {
			$(".BotonRetroceder").off("click");
			$(".BotonAvanzar").off("click");
		})
	})
})

/*---------------------*/
/*-- Cerrar LightBox --*/
/*---------------------*/

$(document).ready(function() {
	$(".BotonCerrar").click(function() {
		$(".CapaOscura").css("display","block");
		setTimeout(function() {
			$(".CapaOscura").css("opacity","1");
			setTimeout(function() {
				$(".LightBoxContenedor").css("display","none");
				setTimeout(function() {
					$(".CapaOscura").css("opacity","0");
					setTimeout(function() {
						$(".CapaOscura").css("display","none");
					},150);
				},150);
			},150);
		},150);
	})
})
