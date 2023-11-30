import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../chunks/ssr.js";
import "reveal.js";
import "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/markdown/markdown.js";
import "reveal.js/plugin/notes/notes.js";
/* empty css                */const reveal = "";
const black = "";
const monokai = "";
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { animate = false } = $$props;
  let { restart = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.restart === void 0 && $$bindings.restart && restart !== void 0)
    $$bindings.restart(restart);
  return `<section${add_attribute("data-auto-animate-id", id, 0)}${add_attribute("data-auto-animate", animate || null, 0)}${add_attribute("data-auto-animate-restart", restart || null, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = null } = $$props;
  let { lines = null } = $$props;
  let { noescape = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.lines === void 0 && $$bindings.lines && lines !== void 0)
    $$bindings.lines(lines);
  if ($$props.noescape === void 0 && $$bindings.noescape && noescape !== void 0)
    $$bindings.noescape(noescape);
  return `<pre${add_attribute("data-id", id || null, 0)}>  <code data-trim${add_attribute("data-line-numbers", lines || null, 0)}${add_attribute("data-noescape", noescape || null, 0)}>
    ${slots.default ? slots.default({}) : ``}
  </code>
</pre>`;
});
const Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<aside class="notes">${slots.default ? slots.default({}) : ``}</aside>`;
});
const Presentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Slide, "Slide").$$render($$result, { id: "titleslide" }, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-105vfh6">Trigger in PL/SQL vs. T-SQL</h3>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, { id: "table_of_contents" }, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-4ig37t">Table Of Contents</h3> <ol data-svelte-h="svelte-9b27pw"><li>Syntax PL/SQL</li> <li>Syntax T/SQL</li> <li>Vor-/Nachteile</li> <li>Live Demo</li></ol>`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, { id: "syntax" }, {}, {
    default: () => {
      return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-fg98mb">Syntax</h3>`;
        }
      })} ${validate_component(Slide, "Slide").$$render($$result, { animate: true }, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3>`;
        }
      })} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1anu2wc">Create Trigger</p> <img src="create_trigger.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1j8s9lb">Trigger Source</p> <img src="plsql_trigger_source.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1gfe68d">Simple DML Trigger</p> <img src="simple_dml_trigger.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1anu2wc">Create Trigger</p> <img src="plsql_trigger_source.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1vv15ma">Instead of DML Trigger</p> <img src="instead_of_trigger.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          tyle: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1anu2wc">Create Trigger</p> <img src="plsql_trigger_source.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1n99fbf">Compound Trigger</p> <img src="compound_dml_trigger.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          tyle: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1anu2wc">Create Trigger</p> <img src="plsql_trigger_source.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1gtl5hv">System Trigger</p> <img src="system_trigger.gif" alt="insert trigger here" style="width: 125%">`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; position: absolute; top: 10%"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-unrslf">PL/SQL</h3> <p data-svelte-h="svelte-1gtl5hv">System Trigger</p> <div style="display:grid; gap: 2% 5%; grid: auto / auto auto" data-svelte-h="svelte-sbwh3j"><div><p>Event Clause</p> <img src="dml_event_clause.gif" alt="insert trigger here"></div> <div><p>Referencing Clause</p> <img src="referencing_clause.gif" alt="insert trigger here"></div> <div><p>Edition Clause</p> <img src="trigger_edition_clause.gif" alt="insert trigger here"></div> <div><p>Ordering Clause</p> <img src="trigger_ordering_clause.gif" alt="insert trigger here"></div></div>`;
          }
        }
      )}`;
    }
  })}  ${validate_component(Slide, "Slide").$$render($$result, { id: "syntax" }, {}, {
    default: () => {
      return `${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-fg98mb">Syntax</h3>`;
        }
      })} ${validate_component(Slide, "Slide").$$render($$result, { animate: true }, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-1fb48ov">T/SQL</h3>`;
        }
      })}  ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-i0zj35">DML Trigger</h3> <img src="dmltrigger.png" style="width: 125%"> ${validate_component(Notes, "Notes").$$render($$result, {}, {}, {
              default: () => {
                return `<h3 data-svelte-h="svelte-105kgu8">DML Trigger Syntax:</h3> <p data-svelte-h="svelte-vozl0a">Ein DML (Data Manipulation Language) Trigger reagiert auf Änderungen in Daten einer Tabelle oder Sicht.</p> <ul data-svelte-h="svelte-1nfsg5x"><li>ON [ table | view ]: Specifies the triggering table or view.</li> <li>[ FOR | AFTER | INSTEAD OF ]: Determines the trigger execution timing.</li> <li>[ [ INSERT ] [ ; ] [ UPDATE ] [ ; ] [ DELETE ] ]: Defines the triggering events.</li> <li>WITH APPEND: Allows appending multiple triggers to the same event.</li> <li>NOT FOR REPLICATION: Prevents trigger execution during replication changes.</li></ul>`;
              }
            })}`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `${validate_component(Code, "Code").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(`
	    -- DML Trigger Example
        CREATE TRIGGER dbo.AfterUpdateTrigger
        ON dbo.YourTable
        AFTER UPDATE
        AS
        BEGIN
          -- Your trigger logic here
          PRINT 'Rows in YourTable were updated.';
        END;
	    `)}`;
              }
            })}`;
          }
        }
      )}  ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-cmuvlu">DDL Trigger</h3> <img src="ddltrigger.png" style="width: 125%"> ${validate_component(Notes, "Notes").$$render($$result, {}, {}, {
              default: () => {
                return `<h3 data-svelte-h="svelte-11i8q47">DDL Trigger Syntax:</h3> <p data-svelte-h="svelte-hybsif">Ein DDL (Data Definition Language) Trigger reagiert auf Strukturänderungen in der Datenbank.</p> <ul data-svelte-h="svelte-1qo5nue"><li>ON [ ALL SERVER | DATABASE ]: Specifies whether the trigger is on the entire server or a specific database.</li> <li>[ FOR | AFTER ] [ event_type | event_group ] [ ,...n ]: Defines triggering events or event groups.</li> <li>WITH ENCRYPTION: Optionally encrypts the trigger text.</li> <li>EXECUTE AS Clause: Sets the security context for trigger execution.</li></ul>`;
              }
            })}`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `${validate_component(Code, "Code").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(`
        -- DDL Trigger Example
        CREATE TRIGGER ddlTriggerExample
        ON DATABASE
        FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE
        AS
        BEGIN
          -- Your trigger logic here
          PRINT 'A table was created, altered, or dropped.';
        END;
        `)}`;
              }
            })}`;
          }
        }
      )}  ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `<h3 data-svelte-h="svelte-kqkb5v">LOGON Trigger</h3> <img src="logontrigger.png" style="width: 125%"> ${validate_component(Notes, "Notes").$$render($$result, {}, {}, {
              default: () => {
                return `<h3 data-svelte-h="svelte-68snem">LOGON Trigger Syntax:</h3> <p data-svelte-h="svelte-1ud1cjs">Ein LOGON Trigger reagiert auf Benutzeranmeldeereignisse auf der Serverebene.</p> <ul data-svelte-h="svelte-1mtnx8y"><li>ON ALL SERVER: Indicates the trigger is on the entire server.</li> <li>[ FOR | AFTER ] LOGON: Determines the trigger execution timing for logon events.</li> <li>WITH ENCRYPTION: Optionally encrypts the trigger text.</li> <li>EXECUTE AS Clause: Sets the security context for trigger execution.</li></ul>`;
              }
            })}`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render(
        $$result,
        {
          animate: true,
          style: "display:flex; justify-content:center;"
        },
        {},
        {
          default: () => {
            return `${validate_component(Code, "Code").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(`
        -- LOGON Trigger Example
        CREATE TRIGGER logonTriggerExample
        ON ALL SERVER
        AFTER LOGON
        AS
        BEGIN
          -- Your trigger logic here
          PRINT 'User logged in to the server.';
        END;
        `)}`;
              }
            })}`;
          }
        }
      )} ${validate_component(Slide, "Slide").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 data-svelte-h="svelte-1gvch28">Vor- und Nachteile von T/SQL</h3> <div style="display: flex; justify-content: space-between;" data-svelte-h="svelte-rh5znp"><div style="flex: 1;"><h4>Vorteile (T/SQL)</h4> <ul><li>Prozedurale Programmierung</li> <li>Transaktionskontrolle</li> <li>Integration von .NET</li> <li>Optimierte Abfrageleistung</li> <li>Mehrere Datenbankobjekte</li> </ul></div> <div style="flex: 1;"><h4>Nachteile (T/SQL)</h4> <ul><li>Plattformspezifisch</li> <li>Komplexität</li> <li>Begrenzte Unterstützung für fortgeschrittene Funktionen</li> <li>Abhängigkeit von der Datenbankplattform</li> <li>Eingeschränkte Werkzeugunterstützung</li> </ul></div></div> ${validate_component(Notes, "Notes").$$render($$result, {}, {}, {
            default: () => {
              return `<h3 data-svelte-h="svelte-1ebkkrh">Erklärungen:</h3> <ul data-svelte-h="svelte-6hta20"><li><strong>Prozedurale Programmierung:</strong> T-SQL ermöglicht prozedurale Programmierung, was die Erstellung wiederverwendbarer Code-Logik auf der Datenbankebene erleichtert.</li> <li><strong>Transaktionskontrolle:</strong> Mit Mechanismen wie COMMIT und ROLLBACK ermöglicht T-SQL die effektive Verwaltung von Transaktionen zur Sicherstellung der Datenkonsistenz.</li> <li><strong>Integration von .NET:</strong> T-SQL kann nahtlos in Anwendungen integriert werden, die auf dem .NET-Framework basieren, was die Verbindung von Datenbankoperationen und Anwendungslogik erleichtert.</li> <li><strong>Optimierte Abfrageleistung:</strong> Durch die Verwendung von Indexen und Abfrageoptimierern bietet T-SQL Mittel zur Verbesserung der Abfrageleistung, was zu schnelleren Datenbankabfragen führen kann.</li> <li><strong>Mehrere Datenbankobjekte:</strong> T-SQL ermöglicht die Definition verschiedener Datenbankobjekte wie Tabellen, Ansichten, gespeicherte Prozeduren usw., was zu einer effizienten Datenbankstruktur führt.</li> <li><strong>Plattformspezifisch:</strong> T-SQL ist spezifisch für Microsoft SQL Server und möglicherweise nicht mit anderen SQL-Datenbanken kompatibel, was die Portabilität des Codes beeinträchtigen kann.</li> <li><strong>Komplexität:</strong> In komplexen Szenarien kann T-SQL-Code schwer zu verstehen und zu warten sein, insbesondere wenn Prozeduren und Trigger stark verschachtelt oder umfangreich sind.</li> <li><strong>Begrenzte Unterstützung für fortgeschrittene Funktionen:</strong> Im Vergleich zu einigen anderen Datenbanksystemen bietet T-SQL möglicherweise weniger fortgeschrittene Funktionen und Optionen.</li> <li><strong>Abhängigkeit von der Datenbankplattform:</strong> Da T-SQL speziell für SQL Server entwickelt wurde, ist der Code stark von den Funktionen und Einschränkungen dieser Plattform abhängig.</li> <li><strong>Eingeschränkte Werkzeugunterstützung:</strong> Obwohl es einige ausgezeichnete Tools zur Entwicklung und Verwaltung von T-SQL gibt, kann die Unterstützung durch Tools im Vergleich zu anderen SQL-Varianten begrenzt sein.</li></ul>`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Slide, "Slide").$$render($$result, { id: "Beispiele" }, {}, {
    default: () => {
      return `<h5 data-svelte-h="svelte-z4sz1h">Live Demo</h5>`;
    }
  })}`;
});
const Slides = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="reveal"><div class="slides">${validate_component(Presentation, "Presentation").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-2gcwam_START -->${$$result.title = `<title>RECT Lightning Talk</title>`, ""}<!-- HEAD_svelte-2gcwam_END -->`, ""} ${validate_component(Slides, "Slides").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
