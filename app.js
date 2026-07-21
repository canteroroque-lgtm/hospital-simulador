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
        txt: "'Doctor, le llamo por una sospecha de sepsis. Es el Sr. García, posoperado de colectomía ayer. Presenta 38.6°C, 118 lpm y abdomen agudo. Requiero su valoración presencial inmediata en menos de 15 minutos'.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 10,
        fb: "✅ ¡Excelente decisión! Has estructurado el mensaje comunicando situación, antecedentes, evaluación objetiva y recomendación explícita.",
        debrief: "Estructurar la llamada con la mnemotecnia SBAR le da al médico una radiografía clara en 30 segundos. Al concluir con una Recomendación explícita ('valoración en 15 min'), se establece un acuerdo de acción claro."
      },
      {
        txt: "Decirle en tono molesto: 'No me está escuchando. Si el paciente se complica, la culpa será suya por no venir ahora mismo'.",
        ok: false,
        risk: 35,
        comm: -25,
        lean: -15,
        fb: "⚠️ Escalada de Conflicto. La agresión genera resistencia defensiva en el receptor, no comunica la gravedad objetiva del cuadro y destruye la colaboración interdisciplinar.",
        debrief: "La comunicación efectiva debe ser asertiva y basada en datos objetivos. Evitar valoraciones de culpa facilita la respuesta rápida."
      },
      {
        txt: "Aumentar la frecuencia de control de signos vitales a cada 15 minutos sin insistir en la llamada al médico hasta que se acumulen dos tomas alteradas.",
        ok: false,
        risk: 25,
        comm: -10,
        lean: -10,
        fb: "⚠️ Distractor Inseguro. Aunque medir signos vitales es correcto, retrasar la notificación médica en un abdomen agudo con fiebre posquirúrgica pierde una ventana terapéutica crítica.",
        debrief: "La monitorización no sustituye la comunicación médica oportuna cuando los criterios de alarma ya se han alcanzado."
      }
    ]
  },
  {
    title: "Situación 2: El traspaso clínico masivo en Planta",
    area: "PLANTA DE MEDICINA INTERNA",
    time: "🕒 09:30 AM",
    context: "Tu turno termina y debes traspasar la guardia de 8 pacientes complejos a tu colega del turno de tarde. En el pasillo hay mucho ruido de familiares, alarmas y llamadas telefónicas.",
    tool: "I-PASS (TeamSTEPPS)",
    opts: [
      {
        txt: "Hacer una entrega verbal rápida en el pasillo de 5 minutos, centrándote solo en los 2 pacientes que consideras 'más graves' para ahorrar tiempo.",
        ok: false,
        risk: 25,
        comm: -15,
        lean: -10,
        fb: "❌ Traspaso Informal e Incompleto. Los traspasos de pasillo omiten información de pacientes estables que pueden descompensarse súbitamente.",
        debrief: "Un traspaso informal introduce desperdicios de retrabajo y aumenta el riesgo de eventos adversos por malentendidos."
      },
      {
        txt: "Dejar la carpeta con las hojas impresas en el mostrador de enfermería para que el colega las lea cuando llegue, evitando interrumpirle.",
        ok: false,
        risk: 35,
        comm: -30,
        lean: -20,
        fb: "❌ Ruptura del Canal de Comunicación. Un traspaso puramente escrito elimina la retroalimentación en bucle cerrado.",
        debrief: "El traspaso seguro requiere interacción bidireccional activa para resolver dudas al instante."
      },
      {
        txt: "Pedirle a la auxiliar de enfermería que le haga un resumen de voz rápido al colega mientras tú completas el registro informático en la estación.",
        ok: false,
        risk: 30,
        comm: -20,
        lean: -15,
        fb: "⚠️ Delegación Inadecuada de Traspaso. La responsabilidad del traspaso clínico del plan de cuidados es indelegable entre los profesionales a cargo del paciente.",
        debrief: "Filtrar la comunicación a través de terceros sin contacto directo entre enfermeros salientes y entrantes duplica la probabilidad de omisión."
      },
      {
        txt: "Reunirse en una sala tranquila, repasar sistemáticamente a cada paciente detallando la gravedad, resumen clínico, tareas pendientes, contingencias y solicitar que el receptor confirme sintetizando la información.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 15,
        fb: "✅ ¡Traspaso Seguro y Completo! Has garantizado que la información viaje de forma intacta.",
        debrief: "I-PASS es el estándar de oro que reduce los errores médicos hasta un 30%. El último paso (Síntesis) obliga al receptor a repetir el plan con sus palabras, garantizando la comprensión mutua."
      }
    ]
  },
  {
    title: "Situación 3: Prescripción confusa en Cuidados Intensivos",
    area: "CUIDADOS INTENSIVOS (UCI)",
    time: "🕒 11:15 AM",
    context: "El Jefe de Servicio de la UCI, conocido por su carácter difícil, te ordena de forma verbal y rápida mientras camina al ascensor: 'Ponle una dosis de rescate de 15 UI de Insulina Rápida al paciente de la cama 4 que tiene la glucosa en 280'. Sabes que ese paciente tiene insuficiencia renal aguda y esa dosis podría causarle una hipoglucemia severa.",
    tool: "CUS / Two-Challenge Rule (TeamSTEPPS)",
    opts: [
      {
        txt: "Detener al médico de forma asertiva y decirle: 'Doctor, estoy preocupado y me siento incómodo administrando 15 UI debido a la falla renal del paciente. Es un riesgo de seguridad por hipoglucemia. Por favor, revisemos la escala'.",
        ok: true,
        risk: 0,
        comm: 25,
        lean: 10,
        fb: "✅ ¡Excelente manejo! Has priorizado la seguridad usando el lenguaje de escalada asertiva.",
        debrief: "La técnica CUS (Concerned, Uncomfortable, Safety Issue) de TeamSTEPPS usa palabras gatillo para detener acciones inseguras de forma profesional y no hostil."
      },
      {
        txt: "Preparar y administrar las 15 UI de insulina de inmediato. Al fin y al cabo, él es el especialista senior y tú debes respetar la jerarquía médica.",
        ok: false,
        risk: 45,
        comm: -25,
        lean: -20,
        fb: "❌ Sumisión Jerárquica Peligrosa. Respetar una orden potencialmente peligrosa para evitar el conflicto es una causa frecuente de eventos adversos graves.",
        debrief: "En seguridad del paciente, la jerarquía se subordina a la evidencia y la seguridad clínica."
      },
      {
        txt: "Reducir por iniciativa propia la dosis a 5 UI de insulina e indicarlo en la gráfica de enfermería sin consultar de nuevo al médico.",
        ok: false,
        risk: 30,
        comm: -15,
        lean: -10,
        fb: "⚠️ Modificación Unilateral No Autorizada. Alterar la prescripción sin consenso médico viola el marco legal y deja al paciente sin seguimiento acordado.",
        debrief: "Las dudas en la prescripción requieren aclaración directa con el prescritor, no cambios autónomos a ciegas."
      },
      {
        txt: "Enfrentarlo frente a los familiares del paciente diciendo: 'Doctor, esa orden es una locura clínica y no la voy a poner. Va a matar al paciente'.",
        ok: false,
        risk: 20,
        comm: -20,
        lean: -15,
        fb: "⚠️ Confrontación Destructiva. Genera defensas emocionales y destruye la confianza del paciente en el equipo de salud.",
        debrief: "La asertividad no requiere agresión ni escándalo público."
      }
    ]
  },
  {
    title: "Situación 4: Discrepancia instrumental en Quirófano",
    area: "QUIRÓFANO CENTRAL",
    time: "🕒 01:45 PM",
    context: "Finaliza una cirugía abdominal compleja de 4 horas. Al realizar el conteo de instrumental y gasas, la enfermera instrumentista nota que falta una compresa. El cirujano principal insiste en cerrar la incisión: 'Ya busqué bien. El conteo inicial de la caja de instrumental debió de estar mal. Cerremos para no alargar la anestesia'.",
    tool: "Poka-Yoke y Trabajo Estandarizado (Lean Healthcare)",
    opts: [
      {
        txt: "Confiar en el cirujano y proceder con el cierre de la herida para evitar retrasar el quirófano e incrementar costos.",
        ok: false,
        risk: 50,
        comm: -15,
        lean: -30,
        fb: "❌ Negligencia / Error Latente. Permitir el cierre con un conteo incorrecto es un error crítico ('Never Event').",
        debrief: "El tiempo ahorrado en quirófano es un desperdicio ficticio comparado con el costo de un cuerpo extraño retenido."
      },
      {
        txt: "Buscar rápidamente en la basura y alrededor de la mesa. Si no aparece en 2 minutos, dejar que el cirujano cierre y pedir una radiografía en la sala de recuperación.",
        ok: false,
        risk: 30,
        comm: -10,
        lean: -15,
        fb: "⚠️ Gestión de Riesgos Insuficiente. Verificar con el paciente cerrado obliga a una reoperación si la placa es positiva.",
        debrief: "El estándar de seguridad obliga a verificar la presencia antes de suturar los planos profundos."
      },
      {
        txt: "Solicitar la pausa quirúrgica e iniciar la búsqueda protocolizada en el campo, mesa de instrumental, sábanas y basura. Si la compresa no aparece, solicitar una radiografía portátil en quirófano antes de suturar la herida.",
        ok: true,
        risk: 0,
        comm: 15,
        lean: 20,
        fb: "✅ ¡Protocolo de Seguridad Cumplido! El conteo es una barrera de seguridad inviolable.",
        debrief: "El bloqueo procedimental de no cerrar hasta asegurar el conteo es un mecanismo Poka-Yoke (a prueba de fallas)."
      },
      {
        txt: "Anotar la falta de la compresa en el libro de incidencias de quirófano y dejar una nota al equipo de reanimación para que palpen el abdomen cada hora.",
        ok: false,
        risk: 45,
        comm: -20,
        lean: -20,
        fb: "⚠️ Documentar el Error no Evita el Daño. Registrar una falla grave sin resolverla no protege la salud del paciente.",
        debrief: "Los registros administrativos no sustituyen la corrección física del peligro antes de finalizar el procedimiento."
      }
    ]
  },
  {
    title: "Situación 5: Orden de Medicación Crítica bajo Presión",
    area: "URGENCIAS - BOX DE REANIMACIÓN",
    time: "🕒 03:20 PM",
    context: "El box de reanimación está caótico. Entra un paciente politraumatizado en shock. En medio del ruido de monitores y alarmas, el médico te grita: 'Prepara una infusión de Noradrenalina, 8 miligramos en 250 de suero fisiológico y pásala a 15 mililitros por hora'.",
    tool: "Check-Back / Closed-Loop Communication (TeamSTEPPS)",
    opts: [
      {
        txt: "Ir rápidamente al gabinete, preparar el fármaco basándote en lo que escuchaste y colgarlo directamente en la bomba de infusión para actuar rápido.",
        ok: false,
        risk: 35,
        comm: -25,
        lean: -10,
        fb: "❌ Alto Riesgo de Error de Medicación. En entornos de alto estrés, la probabilidad de escuchar mal dosis o velocidades es muy elevada.",
        debrief: "Actuar rápido sin confirmar es una falsa eficiencia (desperdicio de corrección) y causa frecuente de eventos adversos por medicamentos de alto riesgo."
      },
      {
        txt: "Repetir en voz alta mirándolo directamente: 'Doctor, confirmo la orden: preparo Noradrenalina de 8 mg en 250 ml de suero fisiológico para infundir a 15 ml/h. ¿Es correcto?'. Y esperar su confirmación verbal.",
        ok: true,
        risk: 0,
        comm: 25,
        lean: 10,
        fb: "✅ ¡Bucle Cerrado Exitosamente! Has blindado la preparación de un vasoactivo crítico.",
        debrief: "El Check-Back de bucle cerrado garantiza que la orden se transmitió, recibió y comprendió exactamente sin margen de duda."
      },
      {
        txt: "Asentir con la cabeza, decir '¡Entendido, doctor!' y proceder a preparar el suero.",
        ok: false,
        risk: 20,
        comm: -15,
        lean: -5,
        fb: "⚠️ Verificación Incompleta. Un simple 'entendido' no confirma qué parámetros numéricos captaste.",
        debrief: "La confirmación verbal vacía no cierra el bucle de comunicación."
      },
      {
        txt: "Pedir al médico que se detenga, abandone al paciente un momento y firme primero la orden informática en el ordenador antes de preparar la ampolla.",
        ok: false,
        risk: 30,
        comm: -20,
        lean: -25,
        fb: "⚠️ Burocracia Excesiva en Emergencia Vital. Exigir firmas informáticas previas durante una reanimación inmediata retrasa el soporte hemodinámico vital.",
        debrief: "En emergencias vitales se permite la orden verbal, pero SIEMPRE protegida con la técnica de bucle cerrado (Check-back)."
      }
    ]
  },
  {
    title: "Situación 6: Alta médica apresurada por bloqueo de camas",
    area: "PLANTA DE HOSPITALIZACIÓN",
    time: "🕒 05:00 PM",
    context: "El hospital está saturado y hay 6 pacientes esperando cama en Urgencias. La dirección te presiona para dar el alta a doña Carmen, de 82 años, quien ingresó por insuficiencia cardíaca. Se le ha modificado toda su medicación oral compleja. Carmen vive sola y su hija no llegará hasta dentro de dos horas.",
    tool: "Trabajo Estandarizado de Alta y Flujo de Valor (Lean Healthcare)",
    opts: [
      {
        txt: "Firmar los papeles de alta, entregárselos a Carmen en mano, desearle suerte y pedirle que libere la cama inmediatamente para subir al siguiente paciente.",
        ok: false,
        risk: 40,
        comm: -20,
        lean: -25,
        fb: "❌ Desperdicio de Reingreso y Alto Riesgo. Enviar a casa a un paciente anciano con cambios terapéuticos complejos sin validar su comprensión garantiza una descompensación previa a 72h.",
        debrief: "Forzar altas inseguras para liberar camas genera reingresos (sobreprocesamiento y desperdicio en Lean)."
      },
      {
        txt: "Rechazar el alta rotundamente y negarte a liberar la cama hasta el día siguiente para evitar problemas de comunicación, ignorando la saturación de Urgencias.",
        ok: false,
        risk: 10,
        comm: -10,
        lean: -30,
        fb: "⚠️ Cuello de Botella Sistémico. Retener camas agrava la crisis en Urgencias, demorando atenciones críticas.",
        debrief: "Ignorar el flujo global del hospital desplaza el peligro a los pacientes en espera en urgencias."
      },
      {
        txt: "Entregarle las recetas modificadas y pedirle a la celadora que la lleve a la parada de taxis para que no espere sola en el pasillo.",
        ok: false,
        risk: 35,
        comm: -15,
        lean: -20,
        fb: "⚠️ Falsa Gestión de Salida. Enviar en taxi a una anciana frágil con dudas sobre su medicación aumenta el riesgo de caídas y errores de toma en el domicilio.",
        debrief: "El transporte acelerado no resuelve la falta de educación sobre el plan terapéutico."
      },
      {
        txt: "Trasladar a Carmen a la sala de tránsito, pedirle que nos explique con sus palabras cómo tomará sus pastillas, llamar a su hija para informarle de los cambios y coordinar el alta con transporte programado.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 20,
        fb: "✅ ¡Excelente gestión integral! Has garantizado la seguridad de la transición y liberado la cama del servicio principal.",
        debrief: "El uso de salas de tránsito mantiene el flujo de camas mientras que el método 'Teach-Back' garantiza la adherencia farmacológica segura."
      }
    ]
  },
  {
    title: "Situación 7: Verificación de Citostáticos de Alto Riesgo",
    area: "ONCOLOGÍA PEDIÁTRICA / FARMACIA",
    time: "🕒 06:30 PM",
    context: "Se recibe en la planta de oncología un suero de Quimioterapia (Vincristina) para un paciente de 6 años. Al revisar la etiqueta, notas que la dosis impresa difiere ligeramente del peso registrado en el ingreso de hace 3 días. La farmacéutica te dice por teléfono: 'Tranquilo, reajustamos la dosis según la superficie corporal esta mañana, está bien'.",
    tool: "Doble Verificación Independiente (Independent Double-Check)",
    opts: [
      {
        txt: "Realizar una Doble Verificación Independiente con un segundo enfermero: recalcular de forma autónoma la superficie corporal con el peso actual y cotejar vial, dosis y vía antes de conectar.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 15,
        fb: "✅ ¡Excelente Barrera de Seguridad! Has interceptado una potencial catástrofe farmacológica.",
        debrief: "La doble verificación independiente (dos profesionales calculando por separado sin influenciarse) es el estándar obligatorio para citostáticos y medicamentos de alto riesgo."
      },
      {
        txt: "Confiar en la palabra de la farmacéutica y administrar la medicación, ya que ellos son los expertos en farmacocinética.",
        ok: false,
        risk: 45,
        comm: -20,
        lean: -15,
        fb: "❌ Ruptura del Control de Calidad. Asumir veracidad por teléfono sin verificar la hoja de cálculo original expone al paciente a sobredosificación grave.",
        debrief: "La confianza interpersonal no sustituye los controles procedimentales independientes en medicamentos de alto riesgo."
      },
      {
        txt: "Devolver el preparado a Farmacia de inmediato sin administrarlo y pedir que vuelvan a fabricar otro suero desde cero sin revisar los números.",
        ok: false,
        risk: 20,
        comm: -10,
        lean: -25,
        fb: "⚠️ Desperdicio de Recursos y Tiempo. Rechazar un preparado válido sin verificar la fórmula genera retrasos y desperdicio de fármacos costosos.",
        debrief: "Primero se coteja el cálculo matemático con un segundo profesional antes de descartar o reconfirmar el producto."
      },
      {
        txt: "Administrar solo la mitad del suero preparado y guardar el resto en la nevera hasta que el oncólogo de guardia pase ronda al día siguiente.",
        ok: false,
        risk: 40,
        comm: -25,
        lean: -20,
        fb: "❌ Subdosificación y Contaminación. Fraccionar citostáticos sin orden médica altera la eficacia antineoplásica y viola las normas de asepsia.",
        debrief: "La dosificación oncológica es estricta; no se debe subdosificar ni almacenar restos sin protocolo."
      }
    ]
  },
  {
    title: "Situación 8: Identificación Activa previa a Hemoderivados",
    area: "PLANTA DE HEMATOLOGÍA",
    time: "🕒 08:00 PM",
    context: "Vas a transfundir un concentrado de hematíes a un paciente con anemia severa. La habitación es doble y ambos pacientes tienen apellidos similares ('Martínez López' y 'Martínez Gómez'). El paciente parece adormilado.",
    tool: "Identificación Activa con 2 Identificadores Unívocos",
    opts: [
      {
        txt: "Mirar la etiqueta de la bolsa de sangre, verificar el número de cama (Cama 12-A) y conectar la vía si la cama coincide.",
        ok: false,
        risk: 50,
        comm: -30,
        lean: -20,
        fb: "❌ Identificación Pasiva Insegura. Guiarse por el número de cama es la causa número uno de reacciones transfusionales letales por error de paciente.",
        debrief: "Las camas cambian; los identificadores unívocos (Nombre completo + Número de Historia/Fecha nacimiento) son los únicos válidos."
      },
      {
        txt: "Preguntar al paciente adormilado: '¿Es usted el Señor Martínez?' y al ver que asiente con la cabeza, iniciar la transfusión.",
        ok: false,
        risk: 35,
        comm: -20,
        lean: -10,
        fb: "⚠️ Pregunta Cerrada Insuficiente. Un paciente confuso o adormilado puede asentir automáticamente a cualquier nombre.",
        debrief: "La identificación activa exige preguntas abiertas ('¿Cuál es su nombre completo y fecha de nacimiento?') combinadas con el escaneo de pulsera."
      },
      {
        txt: "Verificar en la pulsera de identificación el nombre completo y número de historia clínica, pedir al paciente que diga su nombre completo y fecha de nacimiento de forma abierta, y cotejar la bolsa a pie de cama con un segundo profesional.",
        ok: true,
        risk: 0,
        comm: 25,
        lean: 10,
        fb: "✅ ¡Barrera Transfusional Perfecta! Has asegurado los 2 identificadores unívocos a pie de cama.",
        debrief: "El cotejo activo a pie de cama con 2 identificadores independientes previene el evento adverso transfusional (incompatibilidad ABO)."
      },
      {
        txt: "Llamar a la esposa del paciente por teléfono para que te confirme desde su casa la fecha de nacimiento antes de abrir el sistema de infusión.",
        ok: false,
        risk: 25,
        comm: -10,
        lean: -15,
        fb: "⚠️ Procedimiento Ineficiente. Consultar telefónicamente teniendo la pulsera y la historia a pie de cama añade demoras innecesarias.",
        debrief: "La verificación debe realizarse de forma directa y presencial mediante los registros unívocos del hospital."
      }
    ]
  },
  {
    title: "Situación 9: Fatiga de Alarmas en la Guardia Nocturna",
    area: "UNIDAD DE CUIDADOS INTERMEDIOS",
    time: "🕒 09:30 PM",
    context: "Son las 02:00 AM. El monitor del paciente de la cama 3 no para de emitir una alarma amarilla por 'Artefacto / Derivación despegada'. El paciente se mueve mucho y la alarma suena cada 3 minutos, agotando al personal de guardia.",
    tool: "Gestión Lean de Alarmas y Verificación de Sensores",
    opts: [
      {
        txt: "Apagar el volumen del monitor central durante el resto de la noche para poder concentrarse en los demás pacientes sin interrupciones.",
        ok: false,
        risk: 45,
        comm: -25,
        lean: -20,
        fb: "❌ Silenciamiento Indiscriminado Peligroso. Apagar las alarmas centrales desprotege completamente al paciente ante una arritmia real.",
        debrief: "La 'fatiga de alarmas' lleva al silenciamiento imprudente, una causa frecuente de paros no detectados a tiempo."
      },
      {
        txt: "Acudir inmediatamente a la habitación, evaluar el estado clínico del paciente, cambiar los electrodos despegados por unos nuevos con buena adhesión y reajustar los límites de alarma personalizados según la condición del paciente.",
        ok: true,
        risk: 0,
        comm: 15,
        lean: 20,
        fb: "✅ ¡Excelente Gestión de Alarmas! Has eliminado la causa raíz de la falsa alarma garantizando la monitorización real.",
        debrief: "El reemplazo de consumibles defectuosos y la personalización de límites eliminas las falsas alarmas (desperdicio Lean) y mantienen alerta al equipo."
      },
      {
        txt: "Poner el monitor en modo 'Demostración' para que muestre un trazado simulado perfecto y no suene mientras el paciente duerme.",
        ok: false,
        risk: 50,
        comm: -30,
        lean: -30,
        fb: "❌ Negligencia Grave y Falsificación de Datos. Simular datos vitales en un monitor oculta la parada cardíaca o deterioro del paciente.",
        debrief: "Jamás se debe alterar el modo del equipo para fingir estabilidad clínica."
      },
      {
        txt: "Aumentar la dosis de sedante prescrita al paciente para que no se mueva y no despegue los cables.",
        ok: false,
        risk: 40,
        comm: -20,
        lean: -15,
        fb: "❌ Restricción Química Injustificada. Sedar a un paciente por fallos en los electrodos viola los principios éticos y de seguridad.",
        debrief: "El problema técnico de los electrodos se resuelve en el equipo, no sobremedando al paciente."
      }
    ]
  },
  {
    title: "Situación 10: Traslado Intrahospitalario de Paciente Crítico",
    area: "UCI / RADIOLOGÍA (TAC)",
    time: "🕒 11:00 PM",
    context: "Debes trasladar urgentemente a un paciente intubado en ventilación mecánica desde la UCI hasta el escáner (TAC) en la planta baja. El celador tiene prisa y dice: 'Vamos rápido, el escáner se queda libre ahora'. Observas que la bala de oxígeno de transporte marca 50 bar (un tercio de capacidad).",
    tool: "Checklist de Traslado Seguro de Paciente Crítico",
    opts: [
      {
        txt: "Iniciar el traslado inmediatamente para no perder la cita del escáner, confiando en que el trayecto solo dura 10 minutos.",
        ok: false,
        risk: 45,
        comm: -20,
        lean: -25,
        fb: "❌ Riesgo de Desaturación por Agotamiento de O2. Quedarse sin oxígeno en un ascensor bloqueado es una emergencia letal para un intubado.",
        debrief: "El tiempo estimado de traslado debe calcularse con un margen de seguridad del 200% de reserva de oxígeno."
      },
      {
        txt: "Desconectar al paciente del respirador portátil y llevarlo a ambú manual con aire ambiental para ahorrar el oxígeno de la botella.",
        ok: false,
        risk: 40,
        comm: -15,
        lean: -20,
        fb: "❌ Hipoxia Severa Inminente. Ventilar con aire ambiental (FiO2 21%) a un paciente crítico dependiente de FiO2 alta causa paro por anoxia.",
        debrief: "Jamás se debe retirar el aporte de O2 suplementario en pacientes con fallo respiratorio severo."
      },
      {
        txt: "Cancelar la prueba de TAC de forma definitiva y devolver al paciente a la cama de la UCI para no asumir ningún riesgo de transporte.",
        ok: false,
        risk: 25,
        comm: -10,
        lean: -20,
        fb: "⚠️ Omisión diagnóstica. Cancelar un escáner urgente impide diagnosticar complicaciones vasculares o hemorrágicas críticas.",
        debrief: "El riesgo del traslado se mitiga con preparación protocolizada, no suspendiendo pruebas indicadas."
      },
      {
        txt: "Pausar la salida 2 minutos para reemplazar la bala de oxígeno por una llena, verificar la batería del respirador de transporte, llevar maletín de reanimación y confirmar que el equipo del TAC está listo para recibirlo a la llegada.",
        ok: true,
        risk: 0,
        comm: 20,
        lean: 20,
        fb: "✅ ¡Traslado Seguro y Eficiente! Has prevenido fallos de soporte vital durante la transición.",
        debrief: "El checklist estandarizado de transporte intrahospitalario asegura autonomía de O2, energía y comunicación previa de destino."
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
  playSound(880, 0.08, 'sine', 0.08);
}

// Sonido de flatline (Línea de paro cardíaco)
function playFlatline() {
  if (heartbeatIntervalId) clearInterval(heartbeatIntervalId);
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

  // Elementos de telemetría de signos vitales
  const hrElem = document.getElementById("vital-hr");
  const bpElem = document.getElementById("vital-bp");
  const spo2Elem = document.getElementById("vital-spo2");

  // Ajustes de límites
  riskLevel = Math.max(0, Math.min(100, riskLevel));
  fill.style.width = riskLevel + "%";

  // Controlar ritmo de animación del ECG visual y telemetría
  if (riskLevel < 40) {
    ecgPath.style.animationDuration = "2.5s";
    if (hrElem) hrElem.innerHTML = `${65 + Math.floor(riskLevel / 4)} <small>bpm</small>`;
    if (bpElem) bpElem.innerText = `120/80`;
    if (spo2Elem) spo2Elem.innerHTML = `98<small>%</small>`;
  } else if (riskLevel < 70) {
    ecgPath.style.animationDuration = "1.6s";
    if (hrElem) hrElem.innerHTML = `${102 + Math.floor((riskLevel - 40) / 2)} <small>bpm</small>`;
    if (bpElem) bpElem.innerText = `145/95`;
    if (spo2Elem) spo2Elem.innerHTML = `93<small>%</small>`;
  } else if (riskLevel < 100) {
    ecgPath.style.animationDuration = "0.9s";
    if (hrElem) hrElem.innerHTML = `${140 + (riskLevel - 70)} <small>bpm</small>`;
    if (bpElem) bpElem.innerText = `85/50`;
    if (spo2Elem) spo2Elem.innerHTML = `86<small>%</small>`;
  } else {
    // Paro / Flatline (100%)
    ecgPath.style.animationDuration = "0s";
    if (hrElem) hrElem.innerHTML = `0 <small>bpm</small>`;
    if (bpElem) bpElem.innerText = `0/0`;
    if (spo2Elem) spo2Elem.innerHTML = `--<small>%</small>`;
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

  // Renderizar opciones (A, B, C, D)
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";

  e.opts.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    
    // Indicador visual con badge estilizado (A, B, C, D)
    const letter = String.fromCharCode(65 + idx); // A, B, C, D
    btn.innerHTML = `<span class="opt-badge">${letter}</span> <span>${opt.txt}</span>`;
    
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
      statusDesc = "¡Espectacular! Has completado las 10 situaciones clínicas con 0% de riesgo añadido. Demostraste un dominio perfecto del juicio clínico y de las herramientas SBAR, I-PASS, CUS, Poka-Yoke y Doble Verificación. Eres un líder ejemplar en cultura de seguridad.";
      playSound(600, 0.15, 'sine', 0.1);
      setTimeout(() => playSound(800, 0.3, 'sine', 0.1), 150);
    } else if (riskLevel < 40) {
      statusTitle = "🏥 Guardia Segura";
      statusDesc = "Buen trabajo. Mantuviste al paciente a salvo durante tu guardia de 10 situaciones. Cometiste algún pequeño desliz pero lo corregiste de inmediato utilizando los filtros de seguridad del hospital.";
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
  
  const ledFrame = document.getElementById("led-frame");
  ledFrame.className = "led-border";
  document.documentElement.style.setProperty('--led-color', '#10b981');
  document.documentElement.style.setProperty('--led-glow', 'rgba(16, 185, 129, 0.4)');
}

// Acordeón para el manual de herramientas
function toggleGuide(trigger) {
  const item = trigger.parentElement;
  const isExpanded = item.classList.contains("expanded");
  
  document.querySelectorAll(".guide-item").forEach(i => {
    i.classList.remove("expanded");
  });

  if (!isExpanded) {
    item.classList.add("expanded");
    playSound(400, 0.05, 'sine', 0.05);
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
