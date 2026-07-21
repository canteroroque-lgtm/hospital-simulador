// ==========================================
// HOSPITAL HANDOVER & PATIENT SAFETY SIMULATOR
// ==========================================

const events = [
  {
    title: "Situación 1: El reporte apresurado en Urgencias",
    area: "URGENCIAS",
    time: "🕒 08:00 AM",
    context: "Paciente de 65 años posoperado de colectomía con fiebre de 38.6°C, taquicardia (118 lpm) y dolor abdominal severo. Llamas al cirujano de guardia, quien responde desganado: 'Estoy en consultas. Dale un antipirético y le veo cuando pueda'.",
    tool: "SBAR (TeamSTEPPS)",
    opts: [
      {
        txt: "Darle el paracetamol indicado y esperar a que el cirujano termine su consulta para no molestarlo.",
        ok: false,
        risk: 30,
        comm: -20,
        lean: -10,
        fb: "❌ Actitud Pasiva. El paciente se encuentra en un posible cuadro de sepsis o dehiscencia de anastomosis. Posponer la evaluación directa aumenta críticamente el riesgo de choque séptico.",
        debrief: "SBAR (Situation-Background-Assessment-Recommendation) exige levantar la voz de manera estructurada cuando hay datos de alarma. Esperar de forma pasiva rompe el circuito de seguridad."
      },
      {
        txt: "Decirle en tono molesto: 'No me está escuchando. Si el paciente se complica, la culpa será suya por no venir ahora mismo'.",
        ok: false,
        risk: 35,
        comm: -25,
        lean: -15,
        fb: "⚠️ Escalada de Conflicto. La agresión genera resistencia defensiva en el receptor, no comunica la gravedad objetiva del cuadro y destruye la colaboración interdisciplinar.",
        debrief: "La comunicación efectiva debe ser asertiva y objetiva. SBAR evita valoraciones de culpa y se enfoca en los hechos clínicos objetivos para forzar una respuesta colaborativa y segura."
      },
      {
        txt: "'Doctor, le llamo por una sospecha de sepsis. Es el Sr. García, posoperado de colectomía ayer. Presenta 38.6°C, 118 lpm y abdomen agudo. Requiero su valoración presencial inmediata en menos de 15 minutos'.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 10,
        fb: "✅ ¡Excelente decisión! Has comunicado la situación, los antecedentes, la evaluación y la recomendación clara.",
        debrief: "Estructurar la llamada con la mnemotecnia SBAR le da al cirujano una radiografía clara en 30 segundos. Al concluir con una Recomendación explícita ('valoración en 15 min'), se establece un acuerdo de acción y tiempo claro."
      }
    ]
  },
  {
    title: "Situación 2: El traspaso clínico masivo en Planta",
    area: "PLANTA DE MEDICINA INTERNA",
    time: "🕒 10:30 AM",
    context: "Tu turno termina y debes traspasar la guardia de 8 pacientes complejos a tu colega del turno de tarde. En el pasillo hay mucho ruido de familiares, alarmas y llamadas telefónicas.",
    tool: "I-PASS (TeamSTEPPS)",
    opts: [
      {
        txt: "Hacer una entrega verbal rápida en el pasillo de 5 minutos, centrándote solo en los 2 pacientes que consideras 'más graves' para ahorrar tiempo.",
        ok: false,
        risk: 25,
        comm: -15,
        lean: -10,
        fb: "❌ Traspaso Informal e Incompleto. Los traspasos de 'pasillo' omiten información que parece menor pero que puede descompensarse. Además, no se da espacio para que el receptor integre la información.",
        debrief: "Un traspaso informal introduce desperdicios de retrabajo y aumenta el riesgo de eventos adversos debido a malentendidos o tareas críticas no realizadas."
      },
      {
        txt: "Dejar la carpeta con las hojas impresas en el mostrador de enfermería para que el colega las lea cuando llegue, evitando interrumpirle.",
        ok: false,
        risk: 35,
        comm: -30,
        lean: -20,
        fb: "❌ Ruptura del Canal de Comunicación. Un traspaso puramente escrito elimina la retroalimentación en bucle cerrado. Si el receptor tiene dudas o interpreta mal la letra o indicaciones, no hay verificación.",
        debrief: "El traspaso seguro requiere interacción bidireccional activa. Dejar notas escritas viola el principio de comunicación interactiva y fomenta el error latente."
      },
      {
        txt: "Reunirse en una sala tranquila, repasar sistemáticamente a cada paciente detallando la gravedad, resumen clínico, tareas pendientes, contingencias y solicitar que el receptor confirme sintetizando la información.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 15,
        fb: "✅ ¡Traspaso Seguro y Completo! Has garantizado que la información viaje de forma intacta.",
        debrief: "I-PASS es una técnica científicamente validada que reduce los errores médicos hasta en un 30%. El último paso (Síntesis) obliga al receptor a repetir el plan con sus propias palabras, garantizando que el entendimiento mutuo es total."
      }
    ]
  },
  {
    title: "Situación 3: Prescripción confusa en Cuidados Intensivos",
    area: "CUIDADOS INTENSIVOS (UCI)",
    time: "🕒 01:15 PM",
    context: "El Jefe de Servicio de la UCI, conocido por su carácter difícil, te ordena de forma verbal y rápida mientras camina al ascensor: 'Ponle una dosis de rescate de 15 UI de Insulina Rápida al paciente de la cama 4 que tiene la glucosa en 280'. Sabes que ese paciente tiene insuficiencia renal aguda y esa dosis podría causarle una hipoglucemia severa.",
    tool: "CUS / Two-Challenge Rule (TeamSTEPPS)",
    opts: [
      {
        txt: "Preparar y administrar las 15 UI de insulina de inmediato. Al fin y al cabo, él es el especialista senior y tú debes respetar la jerarquía médica.",
        ok: false,
        risk: 45,
        comm: -25,
        lean: -20,
        fb: "❌ Sumisión Jerárquica Peligrosa. Respetar una orden potencialmente peligrosa para evitar el conflicto es una de las causas más frecuentes de eventos adversos graves en la práctica clínica.",
        debrief: "En seguridad del paciente, la jerarquía se subordina a la verdad clínica. Administrar una dosis excesiva sin validar pone en riesgo directo la vida del paciente (hipoglucemia severa / coma)."
      },
      {
        txt: "Enfrentarlo frente a los familiares del paciente diciendo: 'Doctor, esa orden es una locura clínica y no la voy a poner. Va a matar al paciente'.",
        ok: false,
        risk: 20,
        comm: -20,
        lean: -15,
        fb: "⚠️ Confrontación Destructiva. Disminuye la confianza de los familiares en el equipo de salud y genera un conflicto de egos que bloquea la resolución segura del problema.",
        debrief: "Aunque el objetivo de seguridad es correcto, la forma genera defensas emocionales. Se debe utilizar un método asertivo que escale el problema de forma constructiva y profesional."
      },
      {
        txt: "Detener al médico de forma asertiva y decirle: 'Doctor, estoy preocupado y me siento incómodo administrando 15 UI debido a la falla renal del paciente. Es un riesgo de seguridad por hipoglucemia. Por favor, revisemos la escala'.",
        ok: true,
        risk: 0,
        comm: 25,
        lean: 10,
        fb: "✅ ¡Excelente manejo! Has priorizado la seguridad usando el lenguaje de escalada asertiva.",
        debrief: "La técnica CUS (Concerned, Uncomfortable, Safety Issue) de TeamSTEPPS activa palabras gatillo que el personal clínico reconoce inmediatamente como una alerta de seguridad, permitiendo detener la acción para verificarla de forma no hostil."
      }
    ]
  },
  {
    title: "Situación 4: Discrepancia instrumental en Quirófano",
    area: "QUIRÓFANO CENTRAL",
    time: "🕒 03:45 PM",
    context: "Finaliza una cirugía abdominal compleja de 4 horas. Al realizar el conteo de instrumental y gasas, la enfermera instrumentista nota que falta una compresa. El cirujano principal insiste en cerrar la incisión: 'Ya busqué bien. El conteo inicial de la caja de instrumental debió de estar mal. Cerremos para no alargar la anestesia'.",
    tool: "Poka-Yoke y Trabajo Estandarizado (Lean Healthcare)",
    opts: [
      {
        txt: "Confiar en el cirujano y proceder con el cierre de la herida para evitar retrasar el quirófano e incrementar costos.",
        ok: false,
        risk: 50,
        comm: -15,
        lean: -30,
        fb: "❌ Negligencia / Error Latente. Permitir el cierre con un conteo incorrecto es un error crítico ('Never Event'). Las consecuencias clínicas de un textil retenido en cavidad abdominal (sepsis, fístula, reoperación) son catastróficas.",
        debrief: "El tiempo ahorrado en quirófano es un desperdicio ficticio comparado con el coste humano, clínico y legal de dejar una compresa dentro del paciente."
      },
      {
        txt: "Buscar rápidamente en la basura y alrededor de la mesa. Si no aparece en 2 minutos, dejar que el cirujano cierre y pedir una radiografía en la sala de recuperación.",
        ok: false,
        risk: 30,
        comm: -10,
        lean: -15,
        fb: "⚠️ Gestión de Riesgos Insuficiente. Realizar la verificación de cuerpo extraño con el paciente ya cerrado obliga a una potencial reoperación inmediata si la radiografía es positiva.",
        debrief: "El estándar internacional de seguridad obliga a verificar la presencia antes de suturar los planos anatómicos profundos. Tomar atajos metodológicos perpetúa el riesgo."
      },
      {
        txt: "Solicitar la pausa quirúrgica e iniciar la búsqueda protocolizada en el campo, mesa de instrumental, sábanas y basura. Si la compresa no aparece, solicitar una radiografía portátil en quirófano antes de suturar la herida.",
        ok: true,
        risk: 0,
        comm: 15,
        lean: 20,
        fb: "✅ ¡Protocolo de Seguridad Cumplido! El conteo es una barrera inviolable.",
        debrief: "El bloqueo físico y procedimental de no cerrar el abdomen hasta asegurar el conteo es un mecanismo Poka-Yoke (a prueba de fallas). Detener la línea ante un defecto evita que este se propague y se convierta en daño."
      }
    ]
  },
  {
    title: "Situación 5: Orden de Medicación Crítica bajo Presión",
    area: "URGENCIAS - BOX DE REANIMACIÓN",
    time: "🕒 06:20 PM",
    context: "El box de reanimación está caótico. Entra un paciente politraumatizado en shock. En medio del ruido de monitores y alarmas, el médico te grita: 'Prepara una infusión de Noradrenalina, 8 miligramos en 250 de suero fisiológico y pásala a 15 mililitros por hora'.",
    tool: "Check-Back / Closed-Loop Communication (TeamSTEPPS)",
    opts: [
      {
        txt: "Ir rápidamente al gabinete, preparar el fármaco basándote en lo que escuchaste y colgarlo directamente en la bomba de infusión para actuar rápido.",
        ok: false,
        risk: 35,
        comm: -25,
        lean: -10,
        fb: "❌ Alto Riesgo de Error de Medicación. En entornos ruidosos y de alto estrés, la probabilidad de escuchar mal dosis (ej. 8 mg vs 18 mg) o velocidades (ej. 15 ml/h vs 50 ml/h) es extrema.",
        debrief: "Actuar rápido sin confirmar la información recibida es una falsa eficiencia (desperdicio de corrección) y una de las principales causas de eventos adversos por medicamentos de alto riesgo."
      },
      {
        txt: "Asentir con la cabeza, decir '¡Entendido, doctor!' y proceder a preparar el suero.",
        ok: false,
        risk: 20,
        comm: -15,
        lean: -5,
        fb: "⚠️ Verificación Incompleta. Un simple 'entendido' no confirma qué entendiste. El emisor no sabe si escuchaste la dosis correcta o si estás preparando otro fármaco.",
        debrief: "La confirmación verbal vacía no cierra el bucle. Es obligatorio repetir los datos numéricos y de dosificación exactos para asegurar la coincidencia mental."
      },
      {
        txt: "Repetir en voz alta mirándolo directamente: 'Doctor, confirmo la orden: preparo Noradrenalina de 8 mg en 250 ml de suero fisiológico para infundir a 15 ml/h. ¿Es correcto?'. Y esperar su confirmación verbal.",
        ok: true,
        risk: 0,
        comm: 25,
        lean: 10,
        fb: "✅ ¡Bucle Cerrado Exitosamente! Has blindado el proceso de preparación farmacológica.",
        debrief: "El Check-Back o comunicación de bucle cerrado (Closed-loop) garantiza que la información se transmitió, se recibió y se entendió correctamente. En fármacos de alto riesgo (como los vasoactivos), esta técnica es un salvavidas obligatorio."
      }
    ]
  },
  {
    title: "Situación 6: Alta médica apresurada por bloqueo de camas",
    area: "PLANTA DE HOSPITALIZACIÓN",
    time: "🕒 07:45 PM",
    context: "El hospital está saturado y hay 6 pacientes esperando cama en Urgencias. La dirección te presiona para dar el alta a doña Carmen, de 82 años, quien ingresó por insuficiencia cardíaca. Se le ha modificado toda su medicación oral compleja. Carmen vive sola y su hija no llegará hasta dentro de dos horas.",
    tool: "Trabajo Estandarizado de Alta y Flujo de Valor (Lean Healthcare)",
    opts: [
      {
        txt: "Firmar los papeles de alta, entregárselos a Carmen en mano, desearle suerte y pedirle que libere la cama inmediatamente para subir al siguiente paciente.",
        ok: false,
        risk: 40,
        comm: -20,
        lean: -25,
        fb: "❌ Desperdicio de Reingreso y Alto Riesgo. Enviar a casa a un paciente anciano con cambios terapéuticos complejos sin validar su comprensión de las dosis garantiza una descompensación y reingreso en menos de 72 horas.",
        debrief: "Forzar altas inseguras para liberar camas es un fallo sistémico. El reingreso del paciente es un desperdicio masivo (sobreprocesamiento y transporte en Lean) que colapsa aún más el hospital."
      },
      {
        txt: "Rechazar el alta rotundamente y negarte a liberar la cama hasta el día siguiente para evitar problemas de comunicación, ignorando la saturación de Urgencias.",
        ok: false,
        risk: 10,
        comm: -10,
        lean: -30,
        fb: "⚠️ Cuello de Botella Sistémico. Retener camas de forma no planificada agrava la crisis en Urgencias, demorando la atención de pacientes que requieren ingreso urgente.",
        debrief: "Ignorar el flujo global del hospital es una solución localista que desplaza el riesgo hacia Urgencias, donde los pacientes en espera sufren demoras de atención crítica."
      },
      {
        txt: "Trasladar a Carmen a la sala de tránsito, pedirle que nos explique con sus palabras cómo tomará sus pastillas, llamar a su hija para informarle de los cambios y coordinar el alta con transporte programado.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 20,
        fb: "✅ ¡Excelente gestión integral! Has garantizado la seguridad de la transición y liberado la cama del servicio principal.",
        debrief: "El alta médica estructurada y el uso de salas de tránsito para liberar camas calientes son herramientas Lean claves para mantener el flujo de valor de pacientes, mientras que el método 'Teach-Back' asegura que la paciente se va a casa con seguridad farmacológica."
      }
    ]
  }
];

let currentEvent = 0;
let riskLevel = 0;
let efficiencyLevel = 100;
let communicationScore = 100;

// Variables de Audio Synthesizer (Web Audio API)
let audioCtx = null;
let heartbeatIntervalId = null;
let currentBpm = 60;
let isAudioEnabled = true;

// Inicializa el AudioContext
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Genera un pitido dinámico usando osciladores
function playSound(freq, duration, type = 'sine', volume = 0.1) {
  if (!isAudioEnabled) return;
  initAudio();
  if (!audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    // Rampeo exponencial para evitar "clics" de audio al cortar
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (error) {
    console.error("Fallo al reproducir audio sintetizado:", error);
  }
}

// Sonido de ECG Beep estándar
function playHeartbeatBeep() {
  // Pitido agudo corto característico de monitor
  playSound(880, 0.08, 'sine', 0.08);
}

// Sonido de flatline (Línea de paro cardíaco)
function playFlatline() {
  if (heartbeatIntervalId) clearInterval(heartbeatIntervalId);
  // Pitido constante grave/agudo prolongado
  playSound(440, 4.0, 'sawtooth', 0.15);
}

// Sonido al acertar (Acorde armónico ascendente)
function playSuccessSound() {
  setTimeout(() => playSound(523.25, 0.1, 'sine', 0.12), 0);    // C5
  setTimeout(() => playSound(659.25, 0.1, 'sine', 0.12), 80);   // E5
  setTimeout(() => playSound(783.99, 0.2, 'sine', 0.12), 160);  // G5
}

// Sonido al fallar (Zumbido sordo disonante)
function playFailureSound() {
  playSound(120, 0.35, 'sawtooth', 0.2);
  setTimeout(() => playSound(115, 0.3, 'sawtooth', 0.2), 50);
}

// Alarma de Código Rojo (Alerta crítica)
function playCodeRedAlarm() {
  // Sonido oscilante clásico de sirena de cuidados críticos
  let now = audioCtx ? audioCtx.currentTime : 0;
  playSound(660, 0.18, 'triangle', 0.15);
  setTimeout(() => {
    playSound(880, 0.18, 'triangle', 0.15);
  }, 200);
}

// Bucle dinámico del electrocardiograma
function updateHeartbeatLoop() {
  if (heartbeatIntervalId) clearInterval(heartbeatIntervalId);
  
  if (riskLevel >= 100) {
    playFlatline();
    return;
  }

  // Determinar BPM y ritmo basado en el riesgo acumulado
  if (riskLevel < 40) {
    currentBpm = 65; // Ritmo normal
  } else if (riskLevel < 70) {
    currentBpm = 95; // Ritmo acelerado (Taquicardia moderada)
  } else {
    currentBpm = 140; // Taquicardia severa / Alerta
  }

  const intervalMs = (60 / currentBpm) * 1000;

  heartbeatIntervalId = setInterval(() => {
    playHeartbeatBeep();
    
    // Si estamos en Alerta Crítica, disparamos alarma intercalada
    if (riskLevel >= 70 && Math.random() > 0.6) {
      playCodeRedAlarm();
    }
  }, intervalMs);
}

// Actualiza las variables CSS de color y velocidad del LED en base al riesgo
function updateRiskUI() {
  const fill = document.getElementById("risk-fill");
  const val = document.getElementById("risk-val");
  const ledFrame = document.getElementById("led-frame");
  const ecgPath = document.getElementById("ecg-path");

  // Ajustes de límites
  riskLevel = Math.max(0, Math.min(100, riskLevel));
  fill.style.width = riskLevel + "%";

  // Controlar ritmo de animación del ECG visual
  if (riskLevel < 40) {
    ecgPath.style.animationDuration = "2.5s";
  } else if (riskLevel < 70) {
    ecgPath.style.animationDuration = "1.6s";
  } else {
    ecgPath.style.animationDuration = "0.9s";
  }

  // Colores dinámicos y estilos LED
  if (riskLevel < 40) {
    // ESTABLE: Verde
    document.documentElement.style.setProperty('--led-color', '#10b981');
    document.documentElement.style.setProperty('--led-glow', 'rgba(16, 185, 129, 0.4)');
    document.documentElement.style.setProperty('--led-speed', '3.5s');
    ledFrame.classList.remove("critical-alert");
    val.innerText = `${riskLevel}% (Estable)`;
    val.style.color = '#10b981';
  } else if (riskLevel < 70) {
    // PRECAUCIÓN: Naranja/Amarillo
    document.documentElement.style.setProperty('--led-color', '#f59e0b');
    document.documentElement.style.setProperty('--led-glow', 'rgba(245, 158, 11, 0.45)');
    document.documentElement.style.setProperty('--led-speed', '1.8s');
    ledFrame.classList.remove("critical-alert");
    val.innerText = `${riskLevel}% (Precaución)`;
    val.style.color = '#f59e0b';
  } else {
    // ALERTA CRÍTICA: Rojo Neón y Parpadeo
    document.documentElement.style.setProperty('--led-color', '#ef4444');
    document.documentElement.style.setProperty('--led-glow', 'rgba(239, 68, 68, 0.6)');
    ledFrame.classList.add("critical-alert");
    val.innerText = `${riskLevel}% (CÓDIGO ROJO)`;
    val.style.color = '#ef4444';
  }

  updateHeartbeatLoop();
}

function updateStatsUI() {
  // Comunicación
  communicationScore = Math.max(0, Math.min(100, communicationScore));
  document.getElementById("comm-val").innerText = communicationScore + "%";
  document.getElementById("comm-fill").style.width = communicationScore + "%";

  // Eficiencia Lean
  efficiencyLevel = Math.max(0, Math.min(100, efficiencyLevel));
  document.getElementById("lean-val").innerText = efficiencyLevel + "%";
  document.getElementById("lean-fill").style.width = efficiencyLevel + "%";
}

// Carga el escenario actual en pantalla
function loadEvent() {
  const e = events[currentEvent];
  
  // Metadatos
  document.getElementById("area-badge").innerText = e.area;
  document.getElementById("clock-display").innerText = e.time;
  document.getElementById("event-step").innerText = `Situación ${currentEvent + 1} de ${events.length}`;
  
  // Título y Contexto
  document.getElementById("event-title").innerText = e.title;
  document.getElementById("context-box").innerText = e.context;
  
  // Ocultar feedback y botón continuar
  document.getElementById("feedback-card").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  // Renderizar opciones
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";

  e.opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    
    // Indicador visual de opción (A, B, C)
    const letter = String.fromCharCode(65 + idx); // A, B, C
    btn.innerHTML = `<span style="color: var(--text-bright-blue); font-weight: 700; min-width: 20px;">${letter}.</span> <span>${opt.txt}</span>`;
    
    btn.onclick = () => selectOption(btn, opt);
    grid.appendChild(btn);
  });

  updateRiskUI();
  updateStatsUI();
}

// Gestión de la opción seleccionada
function selectOption(selectedBtn, opt) {
  // Aplicar penalizaciones o mejoras a métricas globales
  riskLevel += opt.risk;
  communicationScore += opt.comm;
  efficiencyLevel += opt.lean;

  // Deshabilitar todas las opciones e ilustrar acierto/error
  const buttons = document.querySelectorAll(".opt-btn");
  buttons.forEach(btn => {
    btn.classList.add("disabled");
  });

  if (opt.ok) {
    selectedBtn.classList.remove("disabled");
    selectedBtn.classList.add("correct");
    playSuccessSound();
  } else {
    selectedBtn.classList.remove("disabled");
    selectedBtn.classList.add("wrong");
    playFailureSound();
    
    // Mostrar visualmente la correcta para fines didácticos
    const correctIdx = events[currentEvent].opts.findIndex(o => o.ok);
    if (correctIdx !== -1) {
      setTimeout(() => {
        buttons[correctIdx].classList.add("correct");
      }, 400);
    }
  }

  // Mostrar la tarjeta de Feedback
  const fbCard = document.getElementById("feedback-card");
  const fbTitle = document.getElementById("feedback-title");
  const fbText = document.getElementById("feedback-text");
  const debriefText = document.getElementById("debrief-text");

  fbCard.style.display = "flex";
  if (opt.ok) {
    fbCard.className = "feedback-card correct-feedback";
    fbTitle.innerText = "¡Decisión Segura!";
  } else {
    fbCard.className = "feedback-card wrong-feedback";
    fbTitle.innerText = "Brecha de Seguridad Detectada";
  }

  fbText.innerText = opt.fb;
  debriefText.innerText = opt.debrief;

  // Mostrar actualización de riesgo inmediatamente
  updateRiskUI();
  updateStatsUI();

  // Controlar si el paciente fallece instantáneamente por Código Rojo al 100%
  if (riskLevel >= 100) {
    document.getElementById("next-btn").innerText = "Declarar Evento Adverso →";
    document.getElementById("next-btn").style.display = "block";
  } else {
    document.getElementById("next-btn").innerText = currentEvent === events.length - 1 ? "Ver Reporte de Guardia →" : "Continuar Guardia →";
    document.getElementById("next-btn").style.display = "block";
  }
}

// Avanzar al siguiente evento o terminar guardia
function nextEvent() {
  if (riskLevel >= 100) {
    endShift(true); // Finalización prematura por muerte de paciente
    return;
  }

  currentEvent++;
  if (currentEvent < events.length) {
    loadEvent();
  } else {
    endShift(false); // Guardia completada con éxito o supervivencia
  }
}

// Finaliza el turno y muestra los resultados
function endShift(adverseEvent = false) {
  // Limpiar beeps
  if (heartbeatIntervalId) clearInterval(heartbeatIntervalId);

  // Cambiar pantalla
  showScreen("screen-result");

  // Rellenar datos
  document.getElementById("final-risk").innerText = `${riskLevel}%`;
  document.getElementById("final-comm").innerText = `${communicationScore}%`;
  document.getElementById("final-lean").innerText = `${efficiencyLevel}%`;

  const msgBox = document.getElementById("result-message-box");
  const title = document.getElementById("result-title");
  const badge = document.getElementById("result-status-badge");

  if (adverseEvent || riskLevel >= 100) {
    title.innerText = "Guardia Trágica";
    badge.innerText = "EVENTO ADVERSO GRAVE";
    badge.style.background = "rgba(239, 68, 68, 0.15)";
    badge.style.color = "#ef4444";
    badge.style.borderColor = "rgba(239, 68, 68, 0.4)";
    playFlatline();

    msgBox.innerHTML = `
      <h3 style="color: var(--color-danger)">🚨 Centinela Clínico Activado</h3>
      <p>El riesgo acumulado superó el límite de seguridad (100%). Se produjo un error grave de traspaso que derivó en un evento adverso centinela para el paciente. Tu equipo debió ser intervenido por la Comisión de Calidad y Seguridad.</p>
      <p style="margin-top: 10px;"><em>Recomendación:</em> Revisa el manual de herramientas al final de la página y vuelve a intentarlo priorizando las mnemotecnias de TeamSTEPPS.</p>
    `;
  } else {
    badge.innerText = "GUARDIA COMPLETADA";
    badge.style.background = "rgba(16, 185, 129, 0.15)";
    badge.style.color = "#10b981";
    badge.style.borderColor = "rgba(16, 185, 129, 0.4)";
    
    // Clasificar según desempeño
    let statusTitle = "";
    let statusDesc = "";
    if (riskLevel === 0 && communicationScore >= 180 && efficiencyLevel >= 150) {
      statusTitle = "🏆 Guardia de Excelencia Absoluta";
      statusDesc = "¡Espectacular! Has completado el turno de 12 horas con 0% de riesgo añadido. Aplicaste con precisión milimétrica las herramientas SBAR, I-PASS, CUS y Poka-Yoke. Eres un líder ejemplar en cultura de seguridad y Lean Healthcare.";
      playSound(600, 0.15, 'sine', 0.1);
      setTimeout(() => playSound(800, 0.3, 'sine', 0.1), 150);
    } else if (riskLevel < 40) {
      statusTitle = "🏥 Guardia Segura";
      statusDesc = "Buen trabajo. Mantuviste al paciente a salvo durante tu guardia. Cometiste algún pequeño desliz pero lo corregiste de inmediato utilizando los filtros de seguridad del hospital.";
    } else {
      statusTitle = "⚠️ Guardia de Alto Riesgo";
      statusDesc = "Guardia concluida, pero el paciente estuvo al borde de un incidente grave. La falta de comunicación asertiva obligó a redoblar esfuerzos al final del turno. Deberías repasar las técnicas de bucle cerrado.";
    }

    msgBox.innerHTML = `
      <h3 style="color: var(--text-bright-blue)">${statusTitle}</h3>
      <p>${statusDesc}</p>
    `;
  }
}

// Cambiar de pantalla de manera fluida
function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(s => {
    s.classList.remove("active");
  });
  
  const target = document.getElementById(screenId);
  target.classList.add("active");
}

// Inicia el juego desde la pantalla de bienvenida
function startGame() {
  // Sincronizar audio control
  isAudioEnabled = document.getElementById("audio-toggle-start").checked;
  document.getElementById("audio-toggle-game").checked = isAudioEnabled;

  initAudio();
  showScreen("screen-game");
  
  currentEvent = 0;
  riskLevel = 0;
  efficiencyLevel = 100;
  communicationScore = 100;

  loadEvent();
}

// Reinicia la guardia desde el reporte final
function restartGame() {
  showScreen("screen-start");
  
  // Reiniciar estado
  const ledFrame = document.getElementById("led-frame");
  ledFrame.className = "led-border";
  document.documentElement.style.setProperty('--led-color', '#10b981');
  document.documentElement.style.setProperty('--led-glow', 'rgba(16, 185, 129, 0.4)');
}

// Acordeón para el manual de herramientas
function toggleGuide(trigger) {
  const item = trigger.parentElement;
  const isExpanded = item.classList.contains("expanded");
  
  // Cerrar todos los acordeones
  document.querySelectorAll(".guide-item").forEach(i => {
    i.classList.remove("expanded");
  });

  if (!isExpanded) {
    item.classList.add("expanded");
    playSound(400, 0.05, 'sine', 0.05); // Sonido suave de interacción
  }
}

// Sincronización de Toggles de Audio
document.getElementById("audio-toggle-start").addEventListener("change", function(e) {
  isAudioEnabled = e.target.checked;
  if (isAudioEnabled) initAudio();
});

document.getElementById("audio-toggle-game").addEventListener("change", function(e) {
  isAudioEnabled = e.target.checked;
  if (isAudioEnabled) {
    initAudio();
    updateHeartbeatLoop();
  } else {
    if (heartbeatIntervalId) clearInterval(heartbeatIntervalId);
  }
});
