import { Component, OnInit } from '@angular/core';
import { NbComponentSize, NbMenuItem, NbSidebarService } from '@nebular/theme';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  test: Date = new Date();
  isAdmin = false
  isConnected = false
  usertoken: any
  connectedUser: any
  bellIconConfig: NbIconConfig = { icon: 'bell-outline', pack: 'eva' };
  constructor(private sidebarService: NbSidebarService, private router: Router, private token: TokenStorageService) {
  }


  ngOnInit() {
    this.usertoken = this.token.getToken();
    this.connectedUser = this.token.getUser()

    if (this.usertoken) {
      this.isConnected = true
    }
    else {
      this.isConnected = false
    }
    if (this.connectedUser.role == "USER") {
      this.isAdmin = false
    }
    else {
      this.isAdmin = true
    }
  }
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
  logout() {
    this.token.signOut();
    location.reload()
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }

  employee: NbMenuItem[] = [


    {
      title: 'Demandes History',
      icon: 'chevron-right',
      expanded: false,
      children: [
        {
          title: 'Permissions',
          icon: 'list-outline',
          link: '/historique/permlssion'

        },
        {
          title: 'congés',
          icon: 'list-outline',
          link: '/historique/conge'

        },

      ],
    },

    {
      title: 'Demander',
      icon: 'chevron-right',
      expanded: false,
      children: [


        {
          title: 'Demander un congé',
          icon: 'barcode-outline',
          link: '/demande/conge'
        },
        {
          title: 'Demander une permission',
          icon: 'barcode-outline',
          link: '/demande/permission'
        },

      ]
    }

  ];
  admin: NbMenuItem[] = [
    {
      title: 'Gestion Employée',
      icon: 'person-outline',
      expanded: false,
      children: [
        {
          title: 'Ajouter Employée',
          icon: 'plus-outline',
          link: '/add-employee',
        },
        {
          title: 'Liste Employées',
          icon: 'list-outline',
          link: '/list-employee'
        },

      ],
    },
    {
      title: 'Gestion De Département',
      icon: 'layout-outline',
      expanded: false,
      children: [
        {
          title: 'Ajouter Département',
          icon: 'plus-outline',
          link: '/add-departement'
        },
        {
          title: 'Liste Département',
          icon: 'list-outline',
          link: '/list-departement'
        },

      ],
    },

    {
      title: 'Liste des demandes',
      icon: 'chevron-right',
      expanded: false,
      children: [
        {
          title: 'Permissions',
          icon: 'list-outline',
          link: '/all/permission'

        },
        {
          title: 'congés',
          icon: 'list-outline',
          link: 'all/conge'

        },

      ],
    },
    {
      title: 'Tous les pointages',
      icon: 'chevron-right',
      expanded: false,
      link: 'pointage/all'
    },



  ];
}
