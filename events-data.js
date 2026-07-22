export const events = [
  {
    "title": "Situación 1: El componente Recommendation en SBAR",
    "area": "PLANTA DE CLÍNICA MÉDICA",
    "time": "🕒 08:00 AM",
    "context": "Una paciente de 72 años hospitalizada por neumonía presenta aumento de la frecuencia respiratoria de 20 a 34 respiraciones por minuto, presión arterial de 86/52 mmHg y confusión de inicio reciente. La enfermera comunica la situación al médico mediante SBAR. ¿Cuál de las siguientes expresiones corresponde mejor al componente Recommendation?",
    "tool": "SBAR (TeamSTEPPS)",
    "opts": [
      {
        "txt": "“La paciente ingresó hace dos días por neumonía y recibe ceftriaxona desde ayer”.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ Esto corresponde a Background (Antecedentes), no a la Recomendación.",
        "debrief": "El Background aporta contexto clínico previo; la Recomendación, en cambio, formula una petición de acción concreta."
      },
      {
        "txt": "“Solicito que la valore de inmediato y que consideremos activar el protocolo de sepsis”.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. Es una petición de acción concreta y explícita: la esencia de la Recomendación.",
        "debrief": "La R de SBAR (Recommendation) responde a '¿qué necesito o qué sugiero?': una acción clara y verificable, como solicitar valoración inmediata o activar un protocolo."
      },
      {
        "txt": "“Considero que presenta deterioro hemodinámico compatible con una posible sepsis”.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ Esto corresponde a Assessment (Evaluación), no a la Recomendación.",
        "debrief": "La Evaluación es la impresión diagnóstica profesional; la Recomendación va un paso más allá y pide una acción concreta."
      },
      {
        "txt": "“La llamo porque la paciente está hipotensa, taquipneica y presenta confusión reciente”.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ Esto corresponde a Situation (Situación), no a la Recomendación.",
        "debrief": "La Situación describe qué ocurre ahora mismo con el paciente; es el punto de partida de SBAR, no su cierre."
      }
    ]
  },
  {
    "title": "Situación 2: Omitir la Síntesis del receptor en I-PASS",
    "area": "UCI - PASE DE GUARDIA",
    "time": "🕒 09:15 AM",
    "context": "Durante un pase de guardia en una unidad de cuidados críticos, el médico emisor detalla la situación clínica pero omite la 'Síntesis por el receptor' (paso S del I-PASS) antes de retirarse. Según la evidencia sobre seguridad en la transferencia, ¿cuál es el riesgo crítico de omitir este paso específico?",
    "tool": "I-PASS (TeamSTEPPS)",
    "opts": [
      {
        "txt": "Se incrementa la duración operativa del traspaso, afectando la eficiencia de los flujos Lean.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ El problema no es de duración: de hecho, omitir pasos acorta el traspaso a costa de la seguridad.",
        "debrief": "El riesgo de omitir la Síntesis no es de eficiencia, sino de comprensión: es el paso que verifica que el mensaje fue entendido."
      },
      {
        "txt": "Se imposibilita el registro legal automático en la historia clínica digital del paciente.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ La Síntesis del receptor no tiene relación con el registro legal automático en el sistema informático.",
        "debrief": "Ese paso es verbal e interpersonal; no está vinculado al registro digital de la historia clínica."
      },
      {
        "txt": "Se pierde la oportunidad de confirmar la comprensión mutua y corregir errores de interpretación del plan terapéutico.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. La Síntesis existe justamente para cerrar el ciclo de comprensión entre emisor y receptor.",
        "debrief": "El componente 'Synthesis by receiver' de I-PASS exige que quien recibe el traspaso verbalice su comprensión, permitiendo detectar y corregir malentendidos antes de que se traduzcan en errores."
      },
      {
        "txt": "Se interrumpe el flujo continuo de información al no haber una validación por parte del líder del equipo.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ La Síntesis la realiza el receptor del traspaso, no un 'líder de equipo' externo a la conversación.",
        "debrief": "El paso de Síntesis es una responsabilidad directa de quien recibe la información, no de una validación jerárquica adicional."
      }
    ]
  },
  {
    "title": "Situación 3: El componente ausente en una llamada SBAR",
    "area": "URGENCIAS",
    "time": "🕒 10:30 AM",
    "context": "Una enfermera realiza la siguiente llamada: 'Doctor, llamo por el señor Pérez, de 68 años, quien presenta una presión arterial de 78/44 mmHg dos horas después de una cirugía abdominal. Tiene antecedentes de hipertensión y recibió morfina hace 30 minutos. ¿Puede venir a valorarlo inmediatamente?' ¿Qué componente de SBAR está insuficientemente desarrollado?",
    "tool": "SBAR (TeamSTEPPS)",
    "opts": [
      {
        "txt": "La identificación de la situación clínica actual.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ La Situación sí está presente: hipotensión posquirúrgica en un paciente identificado.",
        "debrief": "La llamada identifica claramente el problema actual (presión arterial baja posoperatoria)."
      },
      {
        "txt": "La presentación de antecedentes clínicos relevantes.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ Los antecedentes (hipertensión, morfina reciente) sí se mencionan.",
        "debrief": "El Background está presente: antecedente de hipertensión y administración reciente de morfina."
      },
      {
        "txt": "La interpretación profesional de los hallazgos.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. Falta la Evaluación: la enfermera no expresa su impresión clínica sobre la causa probable (¿shock hipovolémico? ¿efecto de la morfina?).",
        "debrief": "SBAR exige que quien comunica arriesgue una interpretación profesional de lo que observa, no solo describa datos. Sin esa Evaluación, el receptor recibe información incompleta para priorizar su respuesta."
      },
      {
        "txt": "La formulación de una solicitud concreta de actuación.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ La Recomendación sí está presente: pide que el médico valore al paciente de inmediato.",
        "debrief": "La solicitud de valoración inmediata cumple con el componente de Recomendación."
      }
    ]
  },
  {
    "title": "Situación 4: Falla de traspaso por omisión de tarea en I-PASS",
    "area": "SALA DE INTERNACIÓN",
    "time": "🕒 11:45 AM",
    "context": "Durante un pase de sala con I-PASS, el residente entrante escucha el resumen pero no verbaliza su comprensión del plan ni de los pendientes antes de retirarse. Horas después, no se realizó una ecografía que había sido solicitada.",
    "tool": "I-PASS (TeamSTEPPS)",
    "opts": [
      {
        "txt": "Falló el componente 'Gravedad de la enfermedad' (Illness Severity).",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -5,
        "fb": "❌ No hay indicios de que la gravedad del paciente se haya comunicado mal.",
        "debrief": "El error descrito no es sobre clasificar la gravedad, sino sobre confirmar la comprensión del plan."
      },
      {
        "txt": "Falló el componente 'Lista de acciones' (Action List), ya que no se documentó la tarea.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -5,
        "fb": "⚠️ La ecografía sí pudo haber estado en la lista de acciones; el fallo específico descrito es no haberla confirmado al recibirla.",
        "debrief": "El problema no es la ausencia de la tarea en la lista, sino que el receptor no verbalizó su comprensión de esa tarea pendiente."
      },
      {
        "txt": "Falló el componente 'Síntesis por el receptor' (Synthesis by Receiver), que exige verbalización activa.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. El residente no repitió ni confirmó el plan, por lo que la ecografía pendiente se perdió en la transferencia.",
        "debrief": "El error específico descrito —no verbalizar comprensión— corresponde al componente final de I-PASS, diseñado justamente para confirmar activamente la recepción del plan y prevenir omisiones como la señalada."
      },
      {
        "txt": "Falló el componente 'Conciencia situacional', porque no se previó el escenario de alarma.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -5,
        "fb": "⚠️ La conciencia situacional se refiere a contingencias ante deterioro, no a la confirmación de tareas pendientes.",
        "debrief": "Ese componente cubre planes de contingencia ('¿qué haría si...?'), distinto de la verbalización de comprensión que faltó aquí."
      }
    ]
  },
  {
    "title": "Situación 5: CUS ante una vía de perfusión con flujo incorrecto",
    "area": "CUIDADOS INTENSIVOS (UCI)",
    "time": "🕒 01:15 PM",
    "context": "Una enfermera detecta que la vía de perfusión de un paciente en shock séptico presenta un flujo incorrecto. Comunica su preocupación al médico tratante, quien minimiza el comentario. La enfermera insiste indicando que 'es un problema de seguridad'.",
    "tool": "CUS (TeamSTEPPS)",
    "opts": [
      {
        "txt": "Debe interpretarse como una simple discrepancia clínica que se resuelve por jerarquía.",
        "ok": false,
        "risk": 30,
        "comm": -20,
        "lean": -10,
        "fb": "❌ El modelo CUS existe precisamente para que la jerarquía no determine si se detiene o no una acción insegura.",
        "debrief": "CUS habilita a cualquier profesional, independientemente de su rango, a detener un proceso potencialmente inseguro."
      },
      {
        "txt": "El uso de la expresión 'problema de seguridad' activa la obligación institucional de detener la acción y evaluar la situación.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. Pronunciar el tercer nivel de CUS no es opcional: obliga a pausar y reevaluar.",
        "debrief": "El modelo CUS establece que la enunciación explícita del tercer nivel ('Safety issue'/'problema de seguridad') no es opcional: obliga a detener el proceso y evaluar, independientemente de la jerarquía."
      },
      {
        "txt": "Corresponde aplicar DESC, ya que se trata de un desacuerdo entre profesionales.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ DESC se reserva para conflictos de conducta no urgentes; aquí hay un riesgo de seguridad inmediato.",
        "debrief": "Ante un riesgo de seguridad inmediato para el paciente corresponde CUS, no DESC."
      },
      {
        "txt": "No corresponde ninguna acción adicional si el médico ya se pronunció.",
        "ok": false,
        "risk": 35,
        "comm": -25,
        "lean": -10,
        "fb": "❌ Minimizar la alerta de seguridad no cierra el ciclo: la obligación institucional de detenerse persiste.",
        "debrief": "El deber de detener la acción ante un 'problema de seguridad' anunciado no desaparece porque el médico minimice el comentario."
      }
    ]
  },
  {
    "title": "Situación 6: DESC ante un conflicto recurrente y no urgente",
    "area": "SALA DE INTERNACIÓN - KINESIOLOGÍA",
    "time": "🕒 02:45 PM",
    "context": "Un kinesiólogo observa que, de forma reiterada durante varios turnos, un médico cancela sesiones de fisioterapia respiratoria alegando 'intolerancia del paciente', sin que exista una urgencia inmediata. El kinesiólogo desea abordar el patrón sin dañar la relación profesional.",
    "tool": "DESC (TeamSTEPPS)",
    "opts": [
      {
        "txt": "CUS, porque cualquier discrepancia clínica debe tratarse como problema de seguridad.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ Tratar todo desacuerdo como 'problema de seguridad' banaliza el lenguaje reservado para emergencias reales.",
        "debrief": "CUS se reserva para riesgos de seguridad inmediatos, lo que descarta su uso en un patrón de conducta no urgente."
      },
      {
        "txt": "STEP, porque permite monitorear el progreso del paciente.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ STEP es una herramienta de monitoreo situacional, no de resolución de conflictos interprofesionales.",
        "debrief": "STEP sirve para vigilar el estado del paciente, el equipo, el entorno y el progreso; no aborda un conflicto de conducta recurrente."
      },
      {
        "txt": "DESC, porque se trata de un conflicto de conducta recurrente y no urgente que requiere una conversación estructurada.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. DESC estructura la conversación sin necesidad de escalar el conflicto.",
        "debrief": "DESC está indicado para conflictos relacionales o de conducta no urgentes; CUS, en cambio, se reserva para riesgos de seguridad inmediatos, lo que descarta la opción de usar CUS aquí."
      },
      {
        "txt": "I-PASS, porque estandariza la comunicación en el cambio de turno.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ I-PASS es una herramienta de traspaso de pacientes, no de gestión de conflictos entre profesionales.",
        "debrief": "I-PASS estructura el pase de guardia; no está diseñado para abordar patrones de conducta recurrentes entre disciplinas."
      }
    ]
  },
  {
    "title": "Situación 7: Asignar roles explícitos antes de una actividad",
    "area": "SERVICIO QUIRÚRGICO",
    "time": "🕒 04:20 PM",
    "context": "En un servicio donde 'cada uno cree que la tarea la hace el otro' y se producen omisiones recurrentes de tareas post-quirúrgicas, la dirección busca implementar una herramienta de TeamSTEPPS que asigne roles explícitos antes de iniciar la actividad.",
    "tool": "Briefing (TeamSTEPPS)",
    "opts": [
      {
        "txt": "Debriefing, porque analiza qué falló después del evento.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ El Debriefing es posterior al evento; aquí se necesita prevenir la ambigüedad antes de que ocurra.",
        "debrief": "El Debriefing revisa el aprendizaje después de la actividad; no asigna roles antes de comenzar."
      },
      {
        "txt": "Briefing, porque asigna roles y expectativas explícitas antes de la actividad.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. El Briefing previene justamente el 'creí que lo hacía el otro'.",
        "debrief": "El Briefing es la herramienta de la competencia de Liderazgo orientada específicamente a definir roles y expectativas antes de comenzar, lo que previene la ambigüedad descrita."
      },
      {
        "txt": "Modelo STEP, porque monitorea el progreso del equipo.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ STEP monitorea la situación en curso, no asigna roles antes de iniciar una actividad.",
        "debrief": "STEP es una herramienta de vigilancia continua, no de planificación previa de roles."
      },
      {
        "txt": "Modelo CUS, porque empodera al personal para detener el proceso.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ CUS habilita a detener un proceso inseguro en curso; no define roles antes de una actividad.",
        "debrief": "CUS es una herramienta de escalada asertiva ante riesgo, no de asignación de responsabilidades previas."
      }
    ]
  },
  {
    "title": "Situación 8: SBAR o I-PASS con recursos limitados",
    "area": "DIRECCIÓN DE CALIDAD",
    "time": "🕒 05:45 PM",
    "context": "Un servicio con recursos limitados debe decidir si capacita a su personal en SBAR o en I-PASS para los traspasos de cambio de guardia, considerando que ambas herramientas cuentan con evidencia de certeza moderada a baja-moderada respectivamente, y que la fidelidad de implementación (capacitación, supervisión, cultura) es tan determinante como la herramienta elegida. ¿Cuál es la conclusión metodológicamente más sólida?",
    "tool": "SBAR vs I-PASS (Evidencia AHRQ)",
    "opts": [
      {
        "txt": "Debe descartarse cualquier protocolo estructurado si no hay evidencia de certeza alta.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -10,
        "fb": "❌ Descartar protocolos con evidencia moderada desestima intervenciones de probado impacto en seguridad.",
        "debrief": "La ausencia de evidencia de certeza 'alta' no invalida el uso de herramientas con evidencia moderada y experiencia clínica consistente."
      },
      {
        "txt": "Lo prioritario es adoptar al menos un protocolo estructurado (I-PASS o SBAR) y sostener una implementación de alta fidelidad, más que elegir la herramienta 'perfecta'.",
        "ok": true,
        "risk": 0,
        "comm": 15,
        "lean": 20,
        "fb": "✅ Correcto. La fidelidad de implementación pesa tanto como la herramienta elegida.",
        "debrief": "Es la conclusión que refleja fielmente el hallazgo del documento: la implementación sostenida y de calidad pesa tanto como la selección del protocolo, y ninguna evidencia disponible justifica descartar el uso de protocolos estructurados."
      },
      {
        "txt": "SBAR debe descartarse por completo ya que I-PASS siempre es superior.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -10,
        "fb": "❌ Ambas herramientas son complementarias; la elección depende del contexto, no de una superioridad absoluta.",
        "debrief": "SBAR y I-PASS tienen contextos ideales distintos (urgente/breve vs. traspaso formal/completo); ninguna reemplaza universalmente a la otra."
      },
      {
        "txt": "La elección de la herramienta es irrelevante si el personal ya conoce ambas.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -10,
        "fb": "⚠️ Conocer ambas herramientas no sustituye la necesidad de una implementación sostenida y de alta fidelidad.",
        "debrief": "El conocimiento teórico de las herramientas no garantiza su aplicación consistente sin capacitación, supervisión y cultura de seguridad activas."
      }
    ]
  },
  {
    "title": "Situación 9: Discordancia de lateralidad quirúrgica",
    "area": "QUIRÓFANO CENTRAL",
    "time": "🕒 07:15 PM",
    "context": "En un quirófano, un integrante junior del equipo advierte que el marcado de lateralidad quirúrgica no coincide con la historia clínica, pero el cirujano ya está iniciando el procedimiento. ¿Qué combinación de competencia y herramienta de TeamSTEPPS describe mejor la conducta esperada?",
    "tool": "Apoyo Mutuo / CUS (TeamSTEPPS)",
    "opts": [
      {
        "txt": "Comunicación, mediante el uso de SBAR antes de la cirugía.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ SBAR estructura comunicación informativa; aquí se requiere detener una acción insegura en curso.",
        "debrief": "El momento exige detener el procedimiento, no solo transmitir información estructurada."
      },
      {
        "txt": "Apoyo mutuo, mediante Advocate & Assert y el modelo CUS para detener el proceso de forma asertiva.",
        "ok": true,
        "risk": 0,
        "comm": 20,
        "lean": 10,
        "fb": "✅ Correcto. Cualquier integrante, sin importar su jerarquía, debe poder detener una cirugía ante una discrepancia de lateralidad.",
        "debrief": "La competencia de Apoyo Mutuo, operacionalizada mediante Advocate & Assert y CUS, es la que habilita a cualquier miembro del equipo —independientemente de su jerarquía— a detener un proceso inseguro en tiempo real."
      },
      {
        "txt": "Monitoreo situacional, mediante el modelo DESC.",
        "ok": false,
        "risk": 20,
        "comm": -15,
        "lean": -5,
        "fb": "⚠️ DESC no es una herramienta de monitoreo situacional, sino de gestión de conflictos no urgentes.",
        "debrief": "Además, la situación exige detención inmediata, no una conversación estructurada posterior tipo DESC."
      },
      {
        "txt": "Liderazgo, mediante un Debriefing posterior al evento.",
        "ok": false,
        "risk": 30,
        "comm": -20,
        "lean": -10,
        "fb": "❌ Un Debriefing posterior llega demasiado tarde: la cirugía ya se habría iniciado con lateralidad incorrecta.",
        "debrief": "El riesgo debe interceptarse antes de la incisión; el Debriefing es una herramienta de aprendizaje posterior, no de prevención inmediata."
      }
    ]
  },
  {
    "title": "Situación 10: Poka-Yoke ante envases visualmente similares",
    "area": "FARMACIA PEDIÁTRICA",
    "time": "🕒 08:30 PM",
    "context": "En una unidad pediátrica se han administrado ocasionalmente medicamentos con concentraciones incorrectas porque los envases son visualmente similares. ¿Qué intervención representa mejor un poka-yoke?",
    "tool": "Poka-Yoke (Lean Healthcare)",
    "opts": [
      {
        "txt": "Capacitar nuevamente al personal sobre lectura de etiquetas.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -15,
        "fb": "⚠️ La capacitación depende de la atención humana y no elimina el riesgo de confusión visual entre envases similares.",
        "debrief": "Un poka-yoke no depende de la vigilancia humana constante; modifica el diseño para que el error sea difícil o imposible de cometer."
      },
      {
        "txt": "Incorporar una alerta mensual sobre medicamentos de alto riesgo.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -15,
        "fb": "⚠️ Una alerta periódica es un recordatorio, no un mecanismo que impida físicamente el error.",
        "debrief": "El poka-yoke actúa en el momento de la acción, no como un recordatorio distanciado en el tiempo."
      },
      {
        "txt": "Utilizar conectores y envases diferenciados que impidan seleccionar la concentración incorrecta.",
        "ok": true,
        "risk": 0,
        "comm": 10,
        "lean": 20,
        "fb": "✅ Correcto. El diseño físico impide o hace evidente el error antes de que alcance al paciente.",
        "debrief": "El poka-yoke modifica el diseño para prevenir o hacer evidente el error antes de que alcance al paciente."
      },
      {
        "txt": "Solicitar una segunda firma después de preparar el medicamento.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -15,
        "fb": "⚠️ Una firma posterior a la preparación verifica el resultado, pero no impide la confusión inicial entre envases.",
        "debrief": "El poka-yoke actúa antes o durante la selección del insumo, no como una verificación documental posterior."
      }
    ]
  },
  {
    "title": "Situación 11: Bloqueo automático de dosis en bomba de infusión",
    "area": "UCI - FARMACIA",
    "time": "🕒 09:45 PM",
    "context": "Un hospital instala un sistema que bloquea automáticamente la programación de una bomba de infusión cuando la dosis excede el límite seguro establecido. ¿Cuál es la principal ventaja Lean de esta medida?",
    "tool": "Poka-Yoke (Lean Healthcare)",
    "opts": [
      {
        "txt": "Reduce la necesidad de documentar la administración.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -15,
        "fb": "⚠️ El bloqueo de dosis no tiene relación con reducir la documentación de la administración.",
        "debrief": "La ventaja del poka-yoke es de seguridad en el proceso, no de reducción de carga documental."
      },
      {
        "txt": "Evita que el error avance dentro del proceso.",
        "ok": true,
        "risk": 0,
        "comm": 10,
        "lean": 20,
        "fb": "✅ Correcto. El bloqueo detiene el error antes de que llegue al paciente.",
        "debrief": "El poka-yoke busca detectar o impedir errores durante el proceso, no solo corregirlos posteriormente."
      },
      {
        "txt": "Sustituye completamente el juicio clínico.",
        "ok": false,
        "risk": 25,
        "comm": -15,
        "lean": -15,
        "fb": "❌ El poka-yoke es una barrera adicional, no un reemplazo del criterio clínico del profesional.",
        "debrief": "Estos mecanismos complementan al juicio clínico como una capa extra de seguridad, nunca lo sustituyen."
      },
      {
        "txt": "Elimina la necesidad de revisar incidentes.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -15,
        "fb": "⚠️ La prevención de un tipo de error no elimina la necesidad de seguir revisando y aprendiendo de otros incidentes.",
        "debrief": "La cultura de mejora continua (Kaizen) exige seguir revisando incidentes incluso con barreras poka-yoke instaladas."
      }
    ]
  },
  {
    "title": "Situación 12: 5S ante el desorden de materiales en Urgencias",
    "area": "URGENCIAS",
    "time": "🕒 11:00 PM",
    "context": "En una unidad de urgencias, el personal pierde tiempo buscando catéteres, algunos materiales están vencidos y cada turno los almacena en lugares diferentes. ¿Cuál es la intervención Lean más adecuada?",
    "tool": "5S (Lean Healthcare)",
    "opts": [
      {
        "txt": "Aplicar 5S para clasificar, ordenar, limpiar, estandarizar y mantener el área.",
        "ok": true,
        "risk": 0,
        "comm": 10,
        "lean": 20,
        "fb": "✅ Correcto. 5S ataca directamente el desorden, los vencimientos y la falta de un lugar fijo para cada insumo.",
        "debrief": "La metodología 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) reduce los errores y las pérdidas de tiempo ocasionados por el desorden en boxes de urgencias, quirófanos o farmacia."
      },
      {
        "txt": "Incrementar el inventario disponible en todos los espacios de la unidad.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -20,
        "fb": "❌ Aumentar inventario sin ordenar agrava el desperdicio de 'inventario excesivo' y no resuelve la falta de un lugar fijo.",
        "debrief": "Más stock sin organización solo agrega otro tipo de desperdicio Lean (inventario excesivo con más vencimientos)."
      },
      {
        "txt": "Asignar la búsqueda de materiales a un integrante específico del equipo.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -15,
        "fb": "⚠️ Delegar la búsqueda no elimina el problema de fondo: la falta de un sistema estandarizado de organización.",
        "debrief": "El objetivo Lean es rediseñar el proceso para que nadie tenga que 'buscar', no asignar esa tarea a una persona."
      },
      {
        "txt": "Comprar nuevos armarios sin revisar la distribución actual del material.",
        "ok": false,
        "risk": 20,
        "comm": -10,
        "lean": -20,
        "fb": "❌ Nuevo mobiliario sin clasificar ni estandarizar el material solo traslada el desorden a un espacio distinto.",
        "debrief": "5S exige primero clasificar y ordenar; incorporar más almacenamiento sin ese paso previo no resuelve el desperdicio de movimiento y tiempo."
      }
    ]
  },
{
  "title": "Situación 13: Doble registro manual e informático",
  "area": "ESTACIÓN DE ENFERMERÍA",
  "time": "🕒 12:15 AM",
  "context": "En un servicio de guardia, el mismo dato clínico del paciente se registra manualmente en papel y luego se vuelve a cargar en el sistema informático, sin que ninguno de los dos registros aporte valor adicional. ¿Qué tipo de muda representa esta situación?",
  "tool": "Los 8 Desperdicios (Muda) - Lean Healthcare",
  "opts": [
    {
      "txt": "Sobreproducción, porque se genera información en exceso.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ La sobreproducción es producir más de lo necesario (p. ej. estudios que no cambian la conducta clínica), no duplicar un registro ya existente.",
      "debrief": "Aquí no se genera información nueva en exceso: se repite el mismo dato en dos soportes distintos."
    },
    {
      "txt": "Sobreprocesamiento, porque se agregan pasos redundantes que no añaden valor.",
      "ok": true,
      "risk": 0,
      "comm": 10,
      "lean": 20,
      "fb": "✅ Correcto. El doble registro es el ejemplo característico de sobreprocesamiento.",
      "debrief": "El doble registro del mismo dato es el ejemplo característico de sobreprocesamiento: un paso adicional que no aporta valor al proceso, no un error ni una acumulación de insumos."
    },
    {
      "txt": "Defectos, porque implica un error de registro.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ No hay un error en el dato registrado; el problema es la duplicación del paso, no su exactitud.",
      "debrief": "Los defectos son retrabajos por errores reales, distinto de un paso redundante bien ejecutado dos veces."
    },
    {
      "txt": "Inventario, porque acumula información no utilizada.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ El desperdicio de inventario se refiere a insumos físicos acumulados, no a datos clínicos duplicados.",
      "debrief": "El inventario excesivo aplica a stock de medicamentos o materiales, no al registro repetido de un mismo dato."
    }
  ]
},
{
  "title": "Situación 14: Mapear el flujo de valor del paciente",
  "area": "GESTIÓN DE PROCESOS - CALIDAD",
  "time": "🕒 01:30 AM",
  "context": "Un equipo de mejora desea representar el flujo completo del paciente desde su ingreso a guardia hasta el alta, diferenciando los pasos que agregan valor clínico de los que no, para diseñar un estado futuro más eficiente. ¿Qué herramienta corresponde a este objetivo?",
  "tool": "VSM - Value Stream Mapping (Lean Healthcare)",
  "opts": [
    {
      "txt": "5S, porque organiza el espacio físico de trabajo.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ 5S organiza un espacio físico puntual, no mapea el flujo completo del paciente de principio a fin.",
      "debrief": "5S actúa sobre el orden de un box o depósito; no representa el circuito asistencial completo."
    },
    {
      "txt": "VSM (Value Stream Mapping), porque visualiza y analiza el flujo de valor completo.",
      "ok": true,
      "risk": 0,
      "comm": 10,
      "lean": 20,
      "fb": "✅ Correcto. El VSM mapea cada paso del proceso para distinguir valor de desperdicio.",
      "debrief": "El VSM es la herramienta diseñada específicamente para mapear el flujo de valor de principio a fin y distinguir actividades que agregan valor de las que no."
    },
    {
      "txt": "Kanban, porque gestiona visualmente el inventario de insumos.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ Kanban gestiona la reposición de insumos, no el mapeo del recorrido clínico del paciente.",
      "debrief": "Kanban resuelve faltantes y excesos de stock; no diagrama el flujo de valor asistencial."
    },
    {
      "txt": "AMFE, porque anticipa fallos antes de que ocurran.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ El AMFE es una herramienta prospectiva de análisis de fallos potenciales, no de mapeo de flujo de valor.",
      "debrief": "AMFE y VSM tienen objetivos distintos: uno anticipa fallos, el otro visualiza y rediseña el flujo completo del proceso."
    }
  ]
},
{
  "title": "Situación 15: Estandarizar el orden de la mesa quirúrgica",
  "area": "QUIRÓFANO CENTRAL",
  "time": "🕒 02:45 AM",
  "context": "En un quirófano se establece que, tras cada uso, se debe fotografiar y publicar el estado correcto de organización de la mesa quirúrgica como referencia visual para todo el personal. ¿A cuál de las cinco etapas de la metodología 5S corresponde esta acción?",
  "tool": "5S (Lean Healthcare)",
  "opts": [
    {
      "txt": "Seiri (clasificar).",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ Seiri consiste en descartar lo innecesario, no en publicar una referencia visual del orden correcto.",
      "debrief": "Clasificar es el primer paso: separar lo necesario de lo que no aporta valor al espacio de trabajo."
    },
    {
      "txt": "Seiton (ordenar).",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ Seiton define una ubicación fija para cada cosa; la fotografía de referencia es un paso posterior de estandarización.",
      "debrief": "Ordenar asigna un lugar a cada elemento; estandarizar ese orden mediante una norma visual es una etapa distinta."
    },
    {
      "txt": "Seiketsu (estandarizar).",
      "ok": true,
      "risk": 0,
      "comm": 10,
      "lean": 20,
      "fb": "✅ Correcto. Crear una norma visual de referencia es la definición de Seiketsu.",
      "debrief": "La creación de normas visuales de referencia (fotografías del estado correcto) es la definición específica de Seiketsu, distinta de ordenar (Seiton) o de sostener la disciplina en el tiempo (Shitsuke)."
    },
    {
      "txt": "Shitsuke (mantener).",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ Shitsuke es sostener la disciplina de cumplir el estándar en el tiempo, no crear la referencia visual en sí misma.",
      "debrief": "Mantener supone la disciplina continua de seguir el estándar ya creado; la creación del estándar visual corresponde a Seiketsu."
    }
  ]
},
{
  "title": "Situación 16: Un circuito impuesto sin participación del equipo",
  "area": "DIRECCIÓN DEL HOSPITAL - LOGÍSTICA",
  "time": "🕒 04:00 AM",
  "context": "La dirección de un hospital decide, sin consultar al personal de primera línea, imponer un nuevo circuito de traslado de muestras que considera 'más eficiente', basándose únicamente en el criterio de un consultor externo. ¿Por qué esta decisión se aparta del principio central del Kaizen?",
  "tool": "Kaizen (Lean Healthcare)",
  "opts": [
    {
      "txt": "Porque el Kaizen exige que las soluciones sean propuestas por quienes realizan el trabajo directamente, y no impuestas verticalmente.",
      "ok": true,
      "risk": 0,
      "comm": 10,
      "lean": 20,
      "fb": "✅ Correcto. El Kaizen es participativo por definición.",
      "debrief": "El principio distintivo del Kaizen es que la mejora surja de forma participativa desde quienes ejecutan el proceso, no que sea impuesta desde arriba sin su intervención."
    },
    {
      "txt": "Porque el Kaizen solo puede aplicarse a procesos administrativos, no clínicos.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ El Kaizen se aplica tanto a procesos clínicos como administrativos; esa no es la razón del problema descrito.",
      "debrief": "El alcance del Kaizen no está limitado a lo administrativo; el error aquí es la falta de participación, no el tipo de proceso."
    },
    {
      "txt": "Porque el Kaizen requiere la participación exclusiva de consultores externos certificados.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ Es lo opuesto: el Kaizen prioriza al personal que ejecuta el trabajo por sobre la mirada externa exclusiva.",
      "debrief": "Un evento Kaizen es participativo y multidisciplinario, liderado por quienes conocen el proceso desde adentro."
    },
    {
      "txt": "Porque el Kaizen se limita a intervenciones de más de seis meses de duración.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -15,
      "fb": "⚠️ El Kaizen se caracteriza por eventos breves (días), no por intervenciones prolongadas de meses.",
      "debrief": "Un evento Kaizen típico dura entre tres y cinco días; la duración no es el motivo del problema en este caso."
    }
  ]
},
{
  "title": "Situación 17: Analizar un evento adverso ya ocurrido",
  "area": "COMITÉ DE CALIDAD Y SEGURIDAD",
  "time": "🕒 05:15 AM",
  "context": "Tras un evento adverso ya ocurrido (un error de medicación que provocó daño), el comité de calidad debe decidir qué herramienta utilizar para analizar sistemáticamente las causas del hecho.",
  "tool": "RCA² - Análisis de Causa Raíz",
  "opts": [
    {
      "txt": "AMFE, porque es la herramienta indicada para eventos que ya sucedieron.",
      "ok": false,
      "risk": 25,
      "comm": -15,
      "lean": -10,
      "fb": "❌ El AMFE es prospectivo: se usa antes de que ocurra el evento, para anticipar fallos en un proceso activo.",
      "debrief": "Confundir AMFE con una herramienta retrospectiva invierte su propósito: anticipar fallos futuros, no analizar los ya ocurridos."
    },
    {
      "txt": "RCA² (Análisis de Causa Raíz y Acción), porque es de naturaleza retrospectiva y analiza eventos ya ocurridos.",
      "ok": true,
      "risk": 0,
      "comm": 15,
      "lean": 10,
      "fb": "✅ Correcto. El RCA² se aplica específicamente después del evento adverso.",
      "debrief": "El RCA² es explícitamente retrospectivo: se aplica sobre eventos ya sucedidos, a diferencia del AMFE, que es prospectivo y se usa sobre procesos activos para anticipar fallos."
    },
    {
      "txt": "Poka-yoke, porque previene errores futuros mediante el diseño.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -5,
      "fb": "⚠️ El Poka-Yoke es una solución de diseño preventivo, no una herramienta de análisis de causas de un evento ya ocurrido.",
      "debrief": "El Poka-Yoke puede ser una acción correctiva resultante del RCA², pero no es en sí mismo la herramienta de análisis."
    },
    {
      "txt": "5S, porque organiza el espacio donde ocurrió el evento.",
      "ok": false,
      "risk": 20,
      "comm": -10,
      "lean": -5,
      "fb": "⚠️ 5S organiza el espacio de trabajo; no analiza sistemáticamente las causas de un evento adverso.",
      "debrief": "5S es una herramienta de orden del entorno, no un método de investigación de causas raíz."
    }
  ]
}
];
