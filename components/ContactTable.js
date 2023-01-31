import React from 'react';
import styles from './styles/ContactTable.module.css';
import classnames from 'classnames';

const ContactTable = () => {
  return (
    <div className={styles.containerContact}>
      <table className={styles.form_saisie} cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th
              colspan="3"
              className={classnames(
                styles.formulaire_saisie,
                styles.titre_form_centre
              )}
            >
              <p className={styles.align_center_14_white}>
                <span className={styles.gras}>Personnel Assercar</span>
              </p>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td width="15%">
              <p className={styles.form_petit_centre}>
                <b>Service</b>
                <br />
              </p>
            </td>
            <td width="65%">
              <p className={styles.form_petit_centre}>
                <b>Missions</b>
              </p>
            </td>
            <td width="40%">
              <p className={styles.form_petit_centre}>
                <b>Adresse mail</b>
              </p>
            </td>
          </tr>

          <tr bgcolor="#cccccc">
            <td className={styles.facture}>
              <p className={styles.align_center}>
                <b>
                  Service Administratif
                  <br />
                  01 76 64 74 50 (Choix 1)
                </b>
              </p>
            </td>

            <td className={styles.facture}>
              <p className={styles.align_center}></p>
              <ul className={styles.list_style}>
                <li>
                  La gestion administrative et comptable de l’entreprise
                  ASSERCAR (factures, fournisseurs, paie, …)
                </li>
                <li>
                  Le support des réparateurs sur le périmètre <b>facturation</b>
                </li>
                <li>
                  Le traitement des dossiers <b>Marsh</b>, <b>Verlingue</b>,{' '}
                  <b>Bris de glaces</b>,
                </li>
                <li>
                  L&apos;interface avec les clients (Assureurs, Courtiers,
                  gestionnaires de flottes)
                </li>
              </ul>
              <p></p>
            </td>
            <td className={styles.facture}>
              <p className={styles.align_center}>contact@assercar.fr</p>
            </td>
          </tr>

          <tr bgcolor="#FFFFFF">
            <td className={styles.facture}>
              <p className={styles.align_center}>
                <b>
                  Service Réseau
                  <br />
                  01 76 64 74 50 (Choix 2)
                </b>
              </p>
            </td>
            <td className={styles.facture}>
              <p className={styles.align_center}></p>
              <ul className={styles.list_style}>
                <li>La définition du maillage</li>
                <li>
                  <b>L&apos;étude des candidatures de nouveaux garages</b>
                </li>
                <li>La gestion des litiges</li>
                <li>
                  <b>Les négociations tarifaires annuelles</b>
                </li>
                <li>La gestion des évènements grêle</li>
                <li>
                  Les mises a jour des informations réparateurs (téléphone,
                  horaires, changement de gérance, fermeture annuelle,
                  modification d’affichage sur la géolocalisation, …)
                </li>
              </ul>
              <p></p>
            </td>
            <td className={styles.facture}>
              <p className={styles.align_center}>service.reseau@assercar.fr</p>
            </td>
          </tr>

          <tr bgcolor="#cccccc">
            <td className={styles.facture}>
              <p className={styles.align_center}>
                <b>
                  Service Informatique
                  <br />
                  01 76 64 74 50 (Choix 3)
                </b>
              </p>
            </td>
            <td className={styles.facture}>
              <p className={styles.align_center}></p>
              <ul className={styles.list_style}>
                <li>
                  La maintenance et développement du SI et du site Internet
                  ASSERCAR
                </li>
                <li>L&apos;administration de la base de données</li>
                <li>
                  L&apos;extraction des données et production des reportings
                </li>
                <li>
                  La gestion des identifiants,{' '}
                  <b>mots de passe et profils informatiques</b>
                </li>
                <li>Le support aux utilisateurs</li>
              </ul>
              <p></p>
            </td>
            <td className={styles.facture}>
              <p className={styles.align_center}>
                service.technique@assercar.fr
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
